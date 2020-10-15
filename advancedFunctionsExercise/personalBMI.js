function solve() {

    let [name, age, weight, height] = arguments;

    let bmi = weight / ((height / 100) ** 2);

    let person = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: Math.round(bmi),
        status: ''
    }

    if (bmi < 18.5) person.status = 'underweight';
    else if (bmi < 25) person.status = 'normal';
    else if (bmi < 30) person.status = 'overweight';
    else {
        
        person.status = 'obese';

        person.recommendation = 'admission required';
    }

    return person;
}
solve('Peter', 29, 75, 182)