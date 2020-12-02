//beginning of populating all of the information
$(document).ready(function(){
  populatePage();
  function populatePage(){
   //each pane needs:
   // pane title
   // pane background color
   // pane tag
   // pane desc
   // pane img
   var pane1Array = new Array("Congress Approves $2 Trillion Dollar Emergency Package",
                              "Politics",
                              "#e74c3c",
                              "Another way to fuel Corporate Greed? Or help the Economy Bounce Back?",
                              "https://www.weareiowa.com/wp-content/uploads/sites/94/2019/12/e9340c4a3a4a4a7da261fd6e27a4f531.jpg?w=1920&h=1080&crop=1");

   var pane2Array = new Array("Coronavirus Rampages the World",
                               "World",
                               "#3498db",
                               "As the death count from the virus tops 20,000 people around the world are still wary about the new virus. China's President, Xi Jingping has called for \"strong measures\" against it.",
                               "https://cdn.cnn.com/cnnnext/dam/assets/200131091948-wuhan-hospital-0130-01-exlarge-169.jpg");

   var pane3Array = new Array("Kansas City Chiefs Win SuperBowl LIV",
                              "Sports",
                              "#7f8c8d",
                              "Despite a slow start, Chiefs Quarterback Patrick Mahomes managed to drive his team to the last minute victory over the 49ers in Sunday's game. The final score was 20-31, 14 of those points scored in the last 15 minutes of the game by the Chiefs.",
                              "https://static01.nyt.com/images/2020/02/03/sports/03superbowl-thirtyseconds-kelce/03superbowl-thirtyseconds-kelce-mobileMasterAt3x.jpg");

  var pane4Array = new Array("Tesla Stock Continues to Climb",
                             "Business",
                             "#1abc9c",
                             "From $500 to $900 a share in the short span of a just above a week, Tesla stock is going up -way up. Is it going to continue rising? Or is the Tesla stock just a result of a media-induced bubble? That's what analysts are tring to figure out.",
                             "https://static01.nyt.com/images/2020/02/03/business/03tesla1/merlin_168118245_d9a66c35-b0d3-42d0-9b2a-39a58a0a48f0-superJumbo.jpg");

        $("#pane2.pane-title").html(pane1Array[0]);
        $("#pane2.pane-tag").html(pane1Array[1]);
        $("#pane2").css({"background-color": pane1Array[2]});
        $("#pane2.pane-desc").html(pane1Array[3]);
        $("#pane2.pane-img").attr("src",pane1Array[4]);

        $("#pane3.pane-title").html(pane2Array[0]);
        $("#pane3.pane-tag").html(pane2Array[1]);
        $("#pane3").css({"background-color": pane2Array[2]});
        $("#pane3.pane-desc").html(pane2Array[3]);
        $("#pane3.pane-img").attr("src",pane2Array[4]);

        $("#pane4.pane-title").html(pane3Array[0]);
        $("#pane4.pane-tag").html(pane3Array[1]);
        $("#pane4").css({"background-color": pane3Array[2]});
        $("#pane4.pane-desc").html(pane3Array[3]);
        $("#pane4.pane-img").attr("src",pane3Array[4]);

        $("#pane5.pane-title").html(pane4Array[0]);
        $("#pane5.pane-tag").html(pane4Array[1]);
        $("#pane5").css({"background-color": pane4Array[2]});
        $("#pane5.pane-desc").html(pane4Array[3]);
        $("#pane5.pane-img").attr("src",pane4Array[4]);

        } //end of populatePage

        //customize link based on click

        function copyToClipboard(element) {
          var $temp = $("<input>");
          $("body").append($temp);
          $temp.val("fourswipes.com#"+element).select();
          document.execCommand("copy");
          $temp.remove();
          window.alert("Link to this Swipe copied!");
        }

        $("#pane2.fa-link").on("click", function(){
          var link = $("a#pane2").attr('name');
          copyToClipboard(link);
        });

        $("#pane3.fa-link").on("click", function(){
          var link = $("a#pane3").attr('name');
          copyToClipboard(link);
        });

        $("#pane4.fa-link").on("click", function(){
          var link = $("a#pane4").attr('name');
          copyToClipboard(link);
        });

        $("#pane5.fa-link").on("click", function(){
          var link = $("a#pane5").attr('name');
          copyToClipboard(link);
        });
        //customize tweet based on click

       //THE MORE INFORMATION BUTTON
        $("#pane2.fa-ellipsis-h").on("click", function(){
          $("#pane2.pane-img").toggleClass("image-darken");
          if($('#pane2.pane-extra').is(':visible')){
             $('#pane2.pane-extra').fadeOut(500);
          }
          else{
             $('#pane2.pane-extra').fadeIn(750);
          }
        });

        $("#pane3.fa-ellipsis-h").on("click", function(){
          $("#pane3.pane-img").toggleClass("image-darken");
          if($('#pane3.pane-extra').is(':visible')){
             $('#pane3.pane-extra').fadeOut(500);
          }
          else{
             $('#pane3.pane-extra').fadeIn(750);
          }
        });

        $("#pane4.fa-ellipsis-h").on("click", function(){
          $("#pane4.pane-img").toggleClass("image-darken");
          if($('#pane4.pane-extra').is(':visible')){
             $('#pane4.pane-extra').fadeOut(500);
          }
          else{
             $('#pane4.pane-extra').fadeIn(750);
          }
        });

        $("#pane5.fa-ellipsis-h").on("click", function(){
          $("#pane5.pane-img").toggleClass("image-darken");
          if($('#pane5.pane-extra').is(':visible')){
             $('#pane5.pane-extra').fadeOut(500);
          }
          else{
             $('#pane5.pane-extra').fadeIn(750);
          }
        });

        //twitter posting per pane

}); //end of document ready
