$(function () {
  $('#btn').on('click', function () {
    // 今後、ここにクリックされたときの処理を記述する
    $.ajax({
      url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
      dataType: 'jsonp',
    }).done(function (data) {
      if (data.results) {
        setData(data.results[0]); // データが取得できたときの処理を書く
      } else {
        alert('該当する処理が見つかりませんでした');
      }
    }).fail(function (data) {
      alert('通信に失敗しました');
    });
    // データが取得できたときの処理
    function setData(data) {
      $('#prefecture').val(data.address1); //都道府県名
      $('#city').val(data.address2);       //市区町村名
      $('#address').val(data.address3);    //町域名
    }
  });
});

