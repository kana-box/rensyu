
$(function(){

  // メッセージフェードイン
/* WayPoint */
$('.messagelist').waypoint(function(){
  if($('.messagelist').css('visibility') == 'visible') {
    //すでに表示中のときは何もしない
  }
  else {
    $('.messagelist').css('visibility','visible');
    $('.messagelist').toggleClass('animated fadeIn');
  }
},{offset: '80%'}
);

// ナビゲーションレスポンシブ

$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());

$(function(){
  $('.btn-trigger').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());

// newsフェードイン
/* WayPoint */
$('.newsinner').waypoint(function(){
  if($('.newsinner').css('visibility') == 'visible') {
    //すでに表示中のときは何もしない
  }
  else {
    $('.newsinner').css('visibility','visible');
    $('.newsinner').toggleClass('animated fadeIn');
  }
},{offset: '80%'}
);

// 野球部紹介　フェードイン
$('.aboutinner').waypoint(function(){
  if($('.aboutinner').css('visibility') == 'visible') {
    //すでに表示中のときは何もしない
  }
  else {
    $('.aboutinner').css('visibility','visible');
    $('.aboutinner').toggleClass('animated fadeIn');
  }
},{offset: '80%'}
);


// 試合情報写真　フェードイン
$('.gameinfoimg').waypoint(function(){
  if($('.gameinfoimg').css('visibility') == 'visible') {
    //すでに表示中のときは何もしない
  }
  else {
    $('.gameinfoimg').css('visibility','visible');
    $('.gameinfoimg').toggleClass('animated fadeIn');
  }
},{offset: '80%'}
);

// 試合情報　フェードイン
$('.gameinfo_list').waypoint(function(){
  if($('.gameinfo_list').css('visibility') == 'visible') {
    //すでに表示中のときは何もしない
  }
  else {
    $('.gameinfo_list').css('visibility','visible');
    $('.gameinfo_list').toggleClass('animated fadeIn');
  }
},{offset: '70%'}
);

// 甲子園の戦績　フェードイン
$('.historyinner').waypoint(function(){
  if($('.historyinner').css('visibility') == 'visible') {
    //すでに表示中のときは何もしない
  }
  else {
    $('.historyinner').css('visibility','visible');
    $('.historyinner').toggleClass('animated fadeIn');
  }
},{offset: '80%'}
);

// コンテンツ一覧　フェードイン
$('.contentsinner').waypoint(function(){
  if($('.contentsinner').css('visibility') == 'visible') {
    //すでに表示中のときは何もしない
  }
  else {
    $('.contentsinner').css('visibility','visible');
    $('.contentsinner').toggleClass('animated fadeIn');
  }
},{offset: '80%'}
);

$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

});
