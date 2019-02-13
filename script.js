const quotes = [
{name: 'Arnold Schwarzenegger wants you to go to the choppa', gif: '<iframe src="https://giphy.com/embed/nMpAd2zC0uX4c" width="480" height="345" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/threadbombing-choppa-animatedto-nMpAd2zC0uX4c"></a></p>'},
{name: 'Shia Labeouf wants you to just do it', gif: '<iframe src="https://giphy.com/embed/GcSqyYa2aF8dy" width="480" height="355" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/personal-shia-labeouf-just-saying-GcSqyYa2aF8dy"></a></p>'},
{name: 'Patrick is rooting for you', gif: '<iframe src="https://giphy.com/embed/12XDYvMJNcmLgQ" width="480" height="359" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/luck-good-im-rooting-for-you-12XDYvMJNcmLgQ"></a></p>'},
{name: 'Rob Schneider says you can do it', gif: '<iframe src="https://giphy.com/embed/xT4uQCnq6bDx8itLhK" width="480" height="351" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/motivationalgif-xT4uQCnq6bDx8itLhK"></a></p>'},
{name: 'Johnny Depp says you shouldn`t give a shit', gif: '<iframe src="https://giphy.com/embed/3o6EhWyEo8Ea12ueGc" width="480" height="307" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/motivational-3o6EhWyEo8Ea12ueGc"></a></p>'},
{name: 'Steve Buschemi is your daddy', gif: '<iframe src="https://giphy.com/embed/VPdAEt5AplV84" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-adventures-of-pete-and-steve-buscemi-VPdAEt5AplV84"></a></p>'},
{name: 'Gary vee is going somewhere', gif: '<iframe src="https://giphy.com/embed/EfpawnSGCKfJ0Sxpx6" width="480" height="266" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/garyvee-garyvaynerchuk-gary-vaynerchuk-garyvee1000-EfpawnSGCKfJ0Sxpx6"></a></p>'},
{name: 'Donald Glover is going to dance looking at the mirror', gif: '<iframe src="https://giphy.com/embed/7A4IQzHWgZa5g49zNo" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/google-sticker-childish-gambino-google-pixel-7A4IQzHWgZa5g49zNo"></a></p>'},
{name: 'Neil Patrick Harris believes you`re doing great', gif: '<iframe src="https://giphy.com/embed/mJBt2fPfI5kyOn99Cx" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bublywater-amazing-motivation-mJBt2fPfI5kyOn99Cx"></a></p>'},
{name: 'Ben Stiller is teasing you to do it', gif: '<iframe src="https://giphy.com/embed/yE3P1gj3qLMbe" width="480" height="239" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/yE3P1gj3qLMbe">via GIPHY</a></p>'},
{name: 'I`m not sure you trust Senator Palpatine', gif: '<iframe src="https://giphy.com/embed/3o84sw9CmwYpAnRRni" width="480" height="208" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/starwars-star-wars-episode-3-3o84sw9CmwYpAnRRni"></a></p>'},
{name: 'Oh stop it, Will Smith', gif: '<iframe src="https://giphy.com/embed/p4nrVqXnID0kdF8hD7" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/redtabletalk-will-smith-jada-pinkett-red-table-talk-p4nrVqXnID0kdF8hD7"></a></p>'},
{name: 'The Rock thinks you rock', gif: '<iframe src="https://giphy.com/embed/37smd1lkn4saHMyPjX" width="480" height="268" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kidschoice-kids-choice-awards-2018-37smd1lkn4saHMyPjX"></a></p>'},
{name: 'Obama loves you, brother', gif: '<iframe src="https://giphy.com/embed/l2YWuOyr85bkTL98Q" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/obama-president-barack-obama-white-house-correspondents-dinner-2012-l2YWuOyr85bkTL98Q"></a></p>'}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].gif;
}
