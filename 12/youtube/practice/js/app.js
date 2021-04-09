// リクエストパラメータのセット
const KEY = 'AIzaSyBa7__XZ7_xI-6RxkA0cL3wmVKhklI4MNY';     // API KEY
let url = 'https://www.googleapis.com/youtube/v3/search?'; // API URL
url += 'type=video';
url += '&part=snippet';
url += '&q=music';
url += '&videoEmbeddable=true';
url += '&videoSyndicated=true';
url += '&maxResultstype=6';
url += '&key=' + KEY;

// HTMLが読み込まれてから実行する処理
$(function () {
  // youtubeの動画を検索して取得
  $.ajax({
    url: url,
    dataType: 'jsonp'
  }).done(function (data) {
    if (data.items) {
      setData(data); // データ取得が成功したときの処理
    } else {
      console.log(data);
      alert('該当するデータが見つかりませんでした');
    }
  }).fail(function (data) {
    alert('通信に失敗しました');
  });
});

// データ取得が成功したときの処理
function setData(data) {
  let result = '';
  let video = '';
  // 動画を表示するHTMLを作る
  for (i = 0; i < data.items.length; i++) {
    video = '<iframe src="https://www.youtube.com/embed/';
    video += data.items[i].id.videoId;
    video += '" allowfullscreen></iframe>';
    result += '<div class="video">' + video + '</div>'
  }
  // HTMLに反映する
  $('#videoList').html(result);
}
