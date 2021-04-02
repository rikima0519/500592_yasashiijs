let weight;
weight = prompt('BMIを測定します。まずはあなたの体重（kg）を入力してください');

let height;
height = prompt('BMIを測定します。次に身長を入力してください')

let bmi = weight / (height * height)

let message = 'あなたのBMIは「' + bmi + '」です。';

alert(message);

