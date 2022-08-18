const initFacebookSdk = () => {
  window.fbAsyncInit = function() {
    const facebookAppId = process.env.NODE_ENV === 'development' && process.env.REACT_APP_DEPLOYED === "false"
      ? process.env.REACT_APP_FACEBOOK_APP_ID_DEV
      : process.env.REACT_APP_FACEBOOK_APP_ID;
      
    window.FB.init({
      appId      : facebookAppId,
      cookie     : true,
      xfbml      : true,
      version    : 'v14.0'
    });
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

export default initFacebookSdk;