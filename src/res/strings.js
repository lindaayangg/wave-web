const strings = {
  dropzone: {
    message: "Drag and drop or click here",
  },
  sendScreen: {
    textBoxPlaceholder: "Write a message...",
    title: "Send A Wave"
  },
  receiveScreen: {
    title: "Receive A Wave",
    stop: 'Stop Listening',
    clickListen: 'Click Me to Listen for A Wave!',
    receiveStatus: {
      start: 'Your Wave Will Arrive Below',
      listening: 'Listening For Your Wave...',
      receiving: 'Receiving Your Wave...',
      received: 'Your Wave Has Arrived Below',
      failed: 'Unable to Find A Wave'
    },
  },
  homeScreen: {
    title: 'Transfer data using sound technology',
    subtitle: 'Wave allows for the transfer of images and text over sound.'
  },
  aboutScreen: {
    aboutUsTitle: 'About Us',
    subtitle: 'We are Wave, and we help you transfer data between platforms without hassle.',
    aboutText: 'Wave revolves around everyone\'s daily inconvenience of URL links and transfer of files and images. Transferring files typically involves steps such as e-mailing, uploading to the cloud and sharing a link, or syncing up with bluetooth. It only makes sense that there exists a solution that streamlines this process for ALL devices.',
    meetTeam: {
      title: 'Meet the Team',
      linda: {
        name: 'Linda Yang',
        title: 'Co-Founder',
        detail: 'Linda is the frontend developer and designer for Wave. She designed Wave\'s theme and brand, and developed the React based web app. Linda is a third year Computational Mathematics student at the University of Waterloo.'
      },
      david: {
        name: 'David Zhang',
        title: 'Co-Founder',
        detail: 'David is the backend and mobile developer for Wave. He created the backend API as well as the Flutter (Android & iOS) App. David is a third year Computer Science and Business Administration Double Degree student at the University of Waterloo and Wilfred Laurier University.',
      },
    },
    inspiration: {
      title: 'Inspiration',
      hackathon: {
        title: 'It All Began As A Hackathon Idea',
        description: 'We initially created Wave as an Android App for our HackThe6ix project. Upon winning top 10 finalist at the hackathon, we decided to continue pursuing development of the app and expanded it to more platforms. Wave is now available on Android, iOS, and within the browser.',
        pictureDescription1: 'Demo at HackThe6ix',
        pictureDescription2: 'Top 10 Finalist at HackThe6ix',
      }
    },
  },
  navBar: {
    send: "SEND",
    receive: "RECEIVE",
    about: "ABOUT",
  },
  buttons: {
    send: "Send",
    clear: "Clear",
  },
  snackbar: {
    success: "success",
    error: "error",
    warning: "warning",
    requestErrorTitle: 'Request Error',
    requestErrorDescription: 'Something went wrong. Request failed with ',
    copy: {
      copySuccessTitle: 'Copied to Clipboard!'
    },
    text: {
      emptyTitle: 'No Message Found',
      emptyDescription: 'Please enter a message to send a wave.',
      successTitle: 'Send Wave Success',
      successDescription: 'Your message has been successfully waved over.',
      errorTitle: 'Send Wave Error',
      errorDescription1: 'Your message was not waved over with Error: ',
      errorDescription2: '.',
    },
    dropzone: {
      emptyTitle: 'No Files Found',
      emptyDescription: 'Please upload a file to send a wave.',
      uploadErrorTitle: 'Upload Error',
      uploadErrorDescription: 'Only one file can be uploaded.',
      uploadSuccessTitle: 'Upload Success',
      uploadSuccessDescription1: 'File ',
      uploadSuccessDescription2: ' uploaded successfully.',
      removeSuccessTitle: 'Remove Success',
      removeSuccessDescription1: 'File ',
      removeSuccessDescription2: ' removed successfully.',
      successTitle: 'Send Wave Success',
      successDescription: 'Your file has been successfully waved over.',
      errorTitle: 'Send Wave Error',
      errorDescription1: 'Your file was not waved over with Error: ',
      errorDescription2: '.',
    },
    chirp: {
      chirpSendErrorTitle: 'Chirp Send Error',
      chirpSendErrorDescription1: 'Chirp send request failed with ',
      chirpSendErrorDescription2: '.',
      chirpStartErrorTitle: 'Chirp Start Error',
      chirpStartErrorDescription1: 'Unable to start chirp with ',
      chirpStartErrorDescription2: '.',
      chirpRequestErrorTitle: 'Chirp Request Error',
      chirpRequestErrorDescription1: 'Chirp request failed with ',
      chirpRequestErrorDescription2: '.'
    },
    receive: {
      text: {
        errorCodeTitle: 'Wave Network Error',
        errorCodeDescription: 'No wave was found. Please try again.',
        receiveErrorTitle: 'Receive Error',
        receiveErrorDescription: 'Decode failed. Please try again.'
      }
    },
  },
  footer: {
    aboutUs: 'About Us',
    faq: 'FAQ',
    aboutUsDescription: 'Wave is a convenient, device-agnostic means of sending data over sound.',
    companyTitle: 'Company',
    products: 'Products',
    contact: 'Contact Us',
    companyName: 'Wave Inc.',
    location: 'Waterloo, Ontario',
    email: 'waveinc@gmail.com',
    copyRight: '© Wave Inc. 2019',
  },
  faq: {
    title: 'Frequently Asked Questions',
    question1: 'How Do I Listen For A Wave?',
    answer1: 'To receive a wave within the browser, navigate to the receive screen. You must activate the browser to listen for a wave by clicking \'Press Me to Listen for A Wave\' before the other user clicks send. The text in the container box will change according to the current status. If your wave has successfully arrived, it will be displayed in the container.',
    question2: 'How Do I Send A Wave?',
    answer2: 'To send a wave within the browser, navigate to the send screen. Enter a message or upload a file/image, click send once you are done. If your message or file/image is successfully sent, you will hear the sound of bird chirping.',
    question3: 'Why Is Wave Not Working?',
    answer3: 'First, check to ensure that you have an internet connection. If Wave continues to not work and there are no error messages displayed, contact us!',
    question4: 'Why Should I Use Wave Over AirDrop/Bluetooth Or Other File Transferring Tools?',
    answer4: 'Wave is device agnostic, meaning that you can send and receive from any device, unlike AirDrop. Also, Wave supports sending data from one device to infinitely other devices all at the same time.',
    question5: 'Do I Need An Internet Connection to Use Wave?',
    answer5: 'For standard Waves, yes you do need an internet connect. However, Wave also supports offline mode with a maximum of 32 characters being sent.',
    question6: 'Why Is There A Maximum Length to The Text I Can Send For Offline Mode?',
    answer6: 'The 1000 character limit is to ensure that Waves are not too large. The 32 character limit on offline Waves is in place so that the Wave that is played is not too long.',
    question7: 'Does the Person Receiving My Wave Need to Have the App Installed?',
    answer7: 'We suggest installing the Wave app for a better experience, but using the browser version on mobile devices works as well.',
    question8: 'How Secure is Wave?',
    answer8: 'Since anyone can pickup the sound waves that your Wave emits, Wave is not a secure method of sending data. We will add password protected Waves in the future for sending secure data.',
    question9: 'How Many Devices Can I Send to at Once?',
    answer9: 'You can send to as many devices as you would like at once, as long as the devices receiving are on the receive screen.'
  },
  error:{
    errorMessage: 'Something is wrong here...',
    errorDescription: 'We can\'t find the page you are looking for. Contact us or head back to home.',
    homeButton: 'Home',
    contactUsButton: 'Contact Us',
  }
};

export default strings;