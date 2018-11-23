var OriginTitile = document.title;
document.addEventListener('visibilitychange',

  function() {

    if (document.hidden) {

      document.title = '喔唷 崩溃啦! ' + OriginTitile;

      clearTimeout(titleTime);

    } else {

      document.title = '嗯哼 又好了~ ' + OriginTitile;

      titleTime = setTimeout(function() {

        document.title = OriginTitile;

      },

      2000);

    }

  });