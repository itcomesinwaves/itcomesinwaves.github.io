

$(document).ready(() => {
  var currentdate = new Date(); 
  var datetime = currentdate.getDate() + "/"
              + (currentdate.getMonth()+1)  + "/"   
              + currentdate.getHours() + ":"  
              + currentdate.getMinutes() + ":" 
              + currentdate.getSeconds();
//dates
  const $body = $('body');
  $body.html('');
  const $bodyDiv = $('<div>').attr('id', 'new-tweed-div').addClass('div1');
  $body.append($bodyDiv);
  
  const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>').addClass('newTweed')
   //$('.tweetdiv').append(` posted: ${moment().format('LLL')}`);
    const text = `@${tweet.user}: ${tweet.message}`;

    $tweet.text(text).append(` | posted: ${moment().startOf('minute').fromNow()} @${datetime}`)

    $bodyDiv.prepend($tweet)
    return $tweet;
  });
 // $tweet.append(` posted: ${moment().format('LLL')}`);
 // $('.tweetdiv').append(moment().format('LTS'));
  //$bodyDiv.append($tweets)
  //$tweets.insertAfer($p1);
  // const $newRandomTweets = streams.home.map((tweets) => {
  //   const $name = $('<div></div>').addClass('nameDiv');
  //   const $message = $('<div></div>').addClass('message');
  //   const $tag = $('<div></div>').addClass('tag');

  // })
  //var readableDate = moment().format('LTS').startOf('minute').fromNow();

  // var currentdate = new Date(); 
  //   var datetime = currentdate.getDate() + "/"
  //               + (currentdate.getMonth()+1)  + "/"   
  //               + currentdate.getHours() + ":"  
  //               + currentdate.getMinutes() + ":" 
  //               + currentdate.getSeconds();
//dates
 //$('#new-tweed-div').append(` posted: ${moment().format('LTS').startOf('minute').fromNow()}`);
$('.div1').css('color', 'white').css('font', 'bold').css('font-size', '40px');
$(document.body).css("background-image", "url(" + 'https://i.gifer.com/embedded/download/NJbB.gif' + ")");
$('#twiddler-heading').css('color', 'purple').css('font', 'bold').css('font-size', '40px');
$('#first-paragraph').css('color', 'purple').css('font', 'bold').css('font-size', '40px');
  //add header 
 const $h1 = $('<h1>').attr('id', 'twiddler-heading').addClass('heading').text(`Twiddler`);
 $body.prepend($h1);
 // add paragraph to header
 const $p1 = $('<p>').attr('id', 'first-paragraph').addClass('paragraph').text('Nooo, this is NOT Twitter, stop asking!');
$h1.append($p1);
// create clickable div 

// create refresh tweets button
$h1.append(
  $(document.createElement('button')).prop({
      type: 'button',
      innerHTML: 'New Tweeds',
      class: 'btn-styled',
}))
$('.btn-styled ').css('color', 'navy');


$('.btn-styled').on('click', (e) => { 
  console.log("hey");
  $bodyDiv.html('');
  const $newTweeds =  streams.home.map((tweed) => {
  const $newTweed = $('<div></div>').addClass(`newTweed ${tweed.user}`);
  const result = `@${tweed.user}: ${tweed.message}`;

  $newTweed.text(result).append(` | posted: ${moment().startOf('minute').fromNow()} @${datetime}`);
  $bodyDiv.prepend($newTweed);
  return $newTweed;
 
});


})
// dates 
//$newTweeds.insertAfer($p1);
//$bodyDiv.append($newTweeds);
//$('.newTweed').append(` | posted: ${moment().startOf('hour').fromNow()}`);
//})
 // add input username form and submit button to store 
//  const $formUser = $('<form></form>').attr('id', 'form-user');
//  $formUser.append('<input type="text" value="">').attr('id', 'formUser');
//  $body.prepend($formUser);
//  // button for user data
//  const $formUserButton = $("<button>save username!</button>").attr('id', 'button1');
//  $($formUser).append($formUserButton);
// 

 // add input box for tweeds and submit button to post tweets
 const $form = $("<form></form>");
 $form.append('<input type="text" value="">').attr('id', 'form');
 $body.prepend($form);
 //button for tweed data 
 const $formButton = $("<button>Submit Tweed!</button>").attr('id', 'button2');
 $form.append($formButton);

$('#form').css('background-color', 'magenta');
$('#formUser').css('background-color', 'purple');
$('#button2').css('background-color', 'purple');
$('#button1').css('background-color', 'magenta');

//add functionality click of the user save and store it to a var 


var user = prompt('what is your name?');
streams.users[user] = [];
console.log(user);
//var user = '';
//$formUserButton.on('click', (event) => {
 // event.preventDefault();
 // user = $( "#formUser :input" ).first().val(); 
  // streams.users[user] = [];
  // console.log(user);


//});

// console.log(user);

//add funcitonality to the click for tweeds inputs and then after concantenating with the user, store it into a tweeed var then pass it in to the writeTweet function
// $('#button2').on('click', (event) => {
//   event.preventDefault();
//   window.visitor = user;
//   var tweedInput = $( "#form :input" ).first().val();
//   writeTweet(tweedInput);
//   const $newITweeds =  streams.home.map((tweed) => {

//   const $newITweed = $('<div></div>').addClass(`newTweed ${tweed.user}`);
//   const result = `@${tweed.user}: ${tweed.message}`;
//   $newITweed.text(result).append(` | posted: ${moment().startOf('minute').fromNow()} @${datetime}`)
//   console.log(tweed);
// //window.visitor = user; 
// //writeTweet(tweed);

// $bodyDiv.prepend($newITweed); 
// return tweed;
//   });
// });


$('#new-tweed-div').on('click', (event) => { 
  let currentDiv = event.target.closest('div');
  let innerText = currentDiv.innerHTML;
  let textArr = innerText.split(' ');
  let isolatedUserName = textArr[0].slice(1, textArr[0].length - 1);

  $bodyDiv.html('');
  let friends = streams.users[isolatedUserName];
  const $filteredTweeds =  friends.map((tweed) => {
    console.log(tweed.user);
 //if (tweed.user === isolatedUserName) {
   console.log(tweed);


   
    const $newFiltTweed = $('<div></div>').addClass(`newTweed ${tweed.user}`);
    const filteredMessages = `@${tweed.user}: ${tweed.message}`;
   
    $newFiltTweed.text(filteredMessages).append(` | posted: ${moment().startOf('minute').fromNow()} @${datetime}`);
    $bodyDiv.prepend($newFiltTweed);
    

      return $newFiltTweed;
   // } 
  })

});





});
