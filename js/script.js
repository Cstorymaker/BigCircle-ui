jQuery(function ($) {
    // この中であればWordpressでも「$」が使用可能になる
    // ヘッダーの高さ分だけコンテンツを下げる
    $(function () {
      var headerHeight = 0; // ヘッダーの高さをグローバルで管理
  
      // ヘッダーの高さを取得し、mainの上マージンを設定
      function updateMainMargin() {
        headerHeight = $(".js-header").outerHeight(); // ヘッダーの高さを更新
        $("main").css("margin-top", headerHeight); // 取得した高さをmargin-topに適用
      }
  
      // 初回実行（ページロード時）
      updateMainMargin();
  
      // ウィンドウリサイズ時に再計算
      $(window).on("resize", function () {
        updateMainMargin();
      });
  
      // ページ内リンクをクリックした際のスクロール処理
      $('a[href^="#"]').click(function (e) {
        e.preventDefault(); // デフォルトのハッシュジャンプを防止
        var speed = 600;
        var href = $(this).attr("href");
        var target = $(href === "#" || href === "" ? "html" : href);
        var position = target.offset().top - headerHeight; // 最新のヘッダー高さを考慮
  
        $("body,html").stop().animate({
          scrollTop: position
        }, speed, "swing");
        return false;
      });
  
      // ページロード時にハッシュがある場合はスムーススクロール
      $(window).on("load", function () {
        if (location.hash) {
          $("body,html").scrollTop(0); // ブラウザのデフォルトスクロールをリセット
  
          var target = $(location.hash);
          if (target.length) {
            var position = target.offset().top - headerHeight; // 最新のヘッダー高さを考慮
            $("body,html").stop().animate({
              scrollTop: position
            }, 600, "swing");
          }
        }
      });
    });
  
  });