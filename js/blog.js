 $(function() {
     function load(moduleName) {
         $.get("/blog/" + moduleName + ".html",
             function(data) {
                 $('#' + moduleName).html(data);
             }
         );
     };

     load('css');

     var scripts = [
         "/js/bootstrap.bundle.min.js",
         "/js/bstreeview.min.js",
         "/js/docs.min.js",
         "/js/gitalk.min.js"
     ];

     var allDoneCb = function(i) {
         dones.push(i);
         if (dones.length != scripts.length) {
             return;
         }

         load('header');
         load('footer');
         load('left');
         load('comment');
     }

     var dones = [];
     for (var i = 0; i < scripts.length; i++) {
         $.getScript(scripts[i])
             .done(function() {
                 allDoneCb(i);
             })
             .fail(function() {});
     }


 });