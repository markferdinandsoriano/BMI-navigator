const HealthTips = (category: string | number): any => {
    const newCategory = typeof category === 'string' ? category : category.toString()

    const tipsObj = {
        '50': [
            "Balanced Diet: Focus on consuming a balanced diet that includes lean proteins, whole grains, healthy fats, and plenty of fruits and vegetables",
            "Frequent Meals: Eat smaller, more frequent meals throughout the day to increase calorie intake",
            "Strength Training: Incorporate strength training exercises to build muscle mass and improve overall body strength",
            "Nutrient - Dense Snacks: Choose nutrient - dense snacks like nuts, seeds, and yogurt to increase calorie intake without resorting to empty calories",
            "Consult a Dietitian: If you struggle to gain weight, consult a registered dietitian to create a personalized nutrition plan"
        ],
        '160': [
            "Maintain Balance: Continue to eat a balanced diet to maintain your weight and overall health",
            "Regular Exercise: Engage in regular physical activity to support cardiovascular health, muscle strength, and mental well - being",
            "Mindful Eating: Practice mindful eating to prevent overeating or undereating and to ensure you're meeting your nutritional needs",
            "Regular Check - ups: Schedule regular health check - ups to monitor your health and catch any issues early"
        ],
        '260': [
            "Portion Control: Pay attention to portion sizes to reduce calorie intake without drastically changing your diet",
            "Increase Activity: Gradually increase your physical activity level with a mix of cardio and strength training exercises",
            "Reduce Sugary Drinks: Cut down on sugary beverages like soda and opt for water, herbal tea, or unsweetened alternatives",
            "Eat More Fruits and Veggies: Increase your intake of fruits and vegetables, which are high in fiber and nutrients and can help you feel full",
            " Consult a Professional: Consider consulting a registered dietitian or healthcare provider to create a sustainable weight loss plan tailored to your needs"
        ],
        '360': [
            "Professional Guidance: Seek guidance from a healthcare provider, dietitian, or weight loss specialist to create a comprehensive weight loss plan",
            "Lifestyle Changes: Focus on long - term lifestyle changes rather than crash diets.These changes may include healthier eating habits and regular physical activity",
            "Portion Control: Continue practicing portion control and mindful eating to manage calorie intake",
            "Support System: Build a support system with friends or family to help you stay motivated and accountable",
            "Medical Evaluation: In some cases, medication or surgical options may be considered.Discuss these options with your healthcare provider if appropriate"
        ]
    }

    const result = tipsObj[newCategory]

    return result
}

export default HealthTips