import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Constants } from 'expo';



export default class App extends Component {
constructor(props) {
super(props)
this.state = {
  data: [{
  fortune: "The next opportunity that comes along your path will be crucial to your success."
  },
  {
  fortune: "You will soon meet a person who will catch your attention. It will do you well to maintain a friendly relationship with this person."
  },
  {
  fortune: "Find joy in uncertainty."
  },
  {
  fortune: "You will laugh today like you have never laughed before."
  },
  {
  fortune: "You will be a better person tomorrow."
  },
  {
    fortune: "The sun will shine brighter tomorrow."
  },
  {
    fortune: "You will see the lesson in the challenge."
  },
  {
    fortune: "A change in perspective will make your life brighter."
  },
  {
    fortune: "There will be less traffic on the road today."
  },
  {
    fortune: "You will quickly find a parking spot today."
  },
  {
    fortune: "The bad will end and the good will start."
  },
  {
    fortune: "The struggle today will make you stronger tomorrow."
  },
  {
    fortune: "Observe the people around you. You will learn from someone today"
  },
  {
    fortune: "You will find the humor in the mundane."
  },
  {
    fortune: "You will finally put that idea into action."
  },
  {
    fortune: "You will discover something new in your daily routine."
  },
  {
    fortune: "You will notice something new about someone you already know."
  },
  {
    fortune: "You will appreciate something today that you have always taken for granted."
  },
  {
    fortune: "You will reach out to a friend today that you haven’t spoken to in a while."
  },
  {
    fortune: "You will say “yes” to something today that you would normally say “no” to."
  },
  {
    fortune: "You will notice the color of the sky today."
  },
  {
    fortune: "Your phone battery will not run out today."
  },
  {
    fortune: "You will take a moment to breathe in the fresh air."
  },
  {
    fortune: "You will notice something new about the food you may have eaten countless number of times."
  },
  {
    fortune: "You will summon a new opportunity in your life."
  },
  {
    fortune: "You will have an interesting conversation with a stranger today."
  },
  {
    fortune: "You will listen to a song that will bring back a happy memory."
  },
  {
    fortune: "You will be able to do something that you have always done a bit better today."
  },
  {
    fortune: "Put yourself in another person’s shoe. You will become more forgiving."
  },
  {
    fortune: "Try to sleep early tonight. It might help."
  },
  {
    fortune: "You will connect with a friend whom you have not talked to in a long time."
  },
  {
    fortune: "Not using your phone for the next hour may help your wellbeing."
  },
  {
    fortune: "Hydration solves all problems."
  },
  {
    fortune: "You will find an activity that will make you laugh."
  },
  {
    fortune: "You will find a reliable method to release your stress."
  },
  {
    fortune: "You will find a new restaurant that serves great food."
  },
  {
    fortune: "Worrying less will help you accomplish more."
  },
  {
    fortune: "Honesty will take you further than any lie."
  },
  {
    fortune: "If you truly believe, you will succeed."
  },
  {
    fortune: "Putting faith into another person will greatly increase your satisfaciton."
  },
  {
    fortune: "New experiences can be daunting. Simply remember why you decided to challenge yourself."
  },
  {
    fortune: "Finding joy in the little things is the best way to enjoy life."
  },
  {
    fortune: "A chance to talk to someone is the perfect opportunity to bond. You will be able to do this today."
  },
  {
    fortune: "Lower your expectations. You will find life simpler this way."
  },
  {
    fortune: "The detours of life will offer you what is truly important."
  },
  {
    fortune: "Make sure to take breaks. Even geniuses need breaks."
  },
  {
    fortune: "Horoscopes are surprisinlgy accurate. Make sure to check for your zodiac sign."
  },
  {
    fortune: "Dedicate yourself to a task. You can be as productive as you wish to be."
  },
  {
    fortune: "Do not blame others when you are put in a bad situation."
  },
  {
    fortune: "You will be able to work without distractions today."
  },
  {
    fortune: "Stop comparing yourself to others. The only person you should worry about is yourself."
  },
  {
    fortune: "You will be able to talk your way out of a difficult situation."
  },
  {
    fortune: "You will see changes in the way others treat you."
  },
  {
    fortune: "You will find a friend who is willing to explore with you."
  },
  {
    fortune: "You will be able to find yourself in a confusing situation."
  },
  {
    fortune: "Your family will be especially nice to you."
  },
  {
    fortune: "You will be able to visit a place where not many people are allowed."
  },
  {
    fortune: "You will find an old object that will bring back happy memories."
  }
  ]
  }
}

getFortune = () => {
let rand = Math.floor(Math.random() * this.state.data.length);
this.setState({ fortune: this.state.data[rand].fortune});
}
render() {
return (
<View >
<ImageBackground style={styles.backgroundImage} source={require('./assets/cookie.jpeg')} >
<Text style={styles.paragraph} >Fortune: {this.state.fortune}</Text>
<TouchableOpacity onPress={this.getFortune} >
<View style={styles.btn}>
<Text style={styles.btnText} > Receive Fortune </Text>
</View>
</TouchableOpacity>
</ImageBackground>
</View>
);
}
}

const styles = StyleSheet.create({
btn:{
width:"500px",
height:"600px"
},
btnText: {
color:"red",
backgroundColor:"white",
fontSize:"25px"

},
backgroundImage:{
width:"100%",
height:"100%",
alignItems: 'center',
justifyContent: 'center'
},
paragraph: {
margin: 24,
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
color: '#34495e',
zIndex:99
},
})