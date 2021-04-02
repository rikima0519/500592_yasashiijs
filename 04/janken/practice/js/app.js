function janken() {

  const GU = 1
  const CHOKI = 2
  const PA = 3

  function getHumHand() { //ここから人間サイドの手の関数
    let hum = prompt('半角数字で1~3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー\n');

    hum = parseInt(hum, 10);

    if (hum !== GU && hum !== CHOKI && hum !== PA) {

      return undefined;
    } else {
      return hum;
    }
  } //ここまで


  function getComHand() { //ここからコンピューターサイドの手の関数
    return Math.floor(Math.random() * 3) + 1;
  } //ここまで


  function getHandName(num) { //手の名前の関数
    switch (num) {
      case GU:
        return 'グー';
      case CHOKI:
        return 'チョキ';
      case PA:
        return 'パー';
    }
  } //ここまで


  function getResult(com, hum) { //結果の関数
    if (com === hum) {
      return '結果はあいこでした。';
    } else if (com === GU && hum === PA || com === CHOKI && hum === GU || com === PA && hum === CHOKI) {
      return '勝ちました。';
    } else {
      return '負けました。';
    }
  } //ここまで


  function getResultMsg(com, hum) { //結果のメッセージの関数
    return getResult(com, hum) + 'コンピュータの出した手は「' + getHandName(com) + '」でした。';
  } //ここまで



  let hum = getHumHand();
  if (hum == undefined) {
    alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度入力できます。');
  } else {
    let com = getComHand();
    alert(getResultMsg(com, hum));
  }

}

janken();
