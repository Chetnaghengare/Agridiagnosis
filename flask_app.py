from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from PIL import Image
import numpy as np
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the pre-trained model
model = load_model('plant_disease_prediction_model.h5')

# Load class indices mapping
with open('class_indices.json') as f:
    class_indices = json.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'prediction': "No file uploaded"}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'prediction': "No file selected"}), 400

    try:
        # Load and preprocess the image
        image = Image.open(file)
        image = image.resize((224, 224))  # Resize as per your model's input size
        image = img_to_array(image)
        image = np.expand_dims(image, axis=0)  # Add batch dimension
        image = image / 255.0  # Normalize the image
  
        # Get model predictions
        prediction = model.predict(image)
        predicted_class_index = np.argmax(prediction, axis=1)[0]
        predicted_class_name = class_indices[str(predicted_class_index)]

        return jsonify({'prediction': predicted_class_name})
    
    except Exception as e:
        print(f"Error: {str(e)}")  # Log error for debugging
        return jsonify({'prediction': f"Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
