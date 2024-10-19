
// Excercise 03

"use strict"
let arr = [

    `Did you hear about the octopus that held up a convenience store? It was an armed-robbery.`,
    `Two fish are in a tank. One turns to the other and says, Any idea how to drive this thing?`,
    `Why do ducks have tails? To hide their butt-quacks`,
    `Did you about the stolen dog collar? Police are looking for l eads.`,
    `I'm wasn't a fan of facial hair, but eventually it grew on me.`,
    `Have you ever played quiet tennis? It's the same as regular tennis, but without the racket.`,
    `What did the mummy say after getting detention? “This sphinx!`,
    `I used to be addicted to the Hokey Pokey, but th  en I turned myself around.`,
    `Two guys walked into a bar. The third one ducked. `,
    `Did you hear about the guy giving away dead batteries? They were free of charge.`,
    `What do lawyers wear under their pants? Briefs`,
    `Did you hear about the equestrian that got laryngitis? Now she's a hoars  e whisperer.`,
    `Why did the invisible man quit his job? He c  ouldn't see himself doing it. `,
    `There are three kinds of people in the world  . Thos who can do math and those who can't.`,
    `Why did the author get married? She found Mr. Write.  `,
    `Why don't skeletons skydive? They don't have the guts to do it.`,
    `Where do cucumbers go on date night? The salad bar`,
    `Did you hear about the pine tree that got a timeout? It was being knotty.`,
    `What do you say to a cow that gets in your way? “Moooo-ve!`,
    `I met a giant once. I didn't know what to say, so I just ued big words.`,
    `Did you hear about the dolphin romance? They really clicked.`,
    `A horse walks into a diner. The host says, “Hey!” The horse says, “You read m y mind!”`,
    `How did people see in the dark during medieval times? They used knight lights.`,
    `Why aren't there a lot of jokes about peaches? Becausemost of them are pit-iful.`,
    `What's the best way to catch a squirrel? Act like a nut.  `,
    `Did you hear about math book that got a therapist? It had a lot of problems.`,
    `What's worse than raining cats and dogs? Hailing tax  is.`,
    `What do you call a cow with only two legs? Lean beef. `,
    `Why shouldn't you play poker in the jungle? Too many cheetahs.`,
    `Did you hear about the cat that aced the tst? It got a purr-fect score.`,
    `Why is the ocean so clean? It has mer-maids.  `,
    `Why did the king go to the dentist? He needed a crown.`,
    `Did you hear about the archeologist who got fired? His career  was in ruins.`,
    `I'd tell you a construction joke, but I'm still work  ing on it.`,
    `Why don't lions eat clowns? Because they taste funny  .`,
    `Where do boats go when they're sick? To the dock-tor. `,
    `Did you hear about the ghost that joined a soccer team? It wanted to be a ghoulie.`,
    `Why did the potato leave the bar? All eyes were on him`,
    `What do you get when you cross a guitar, drums and a car tire? A rubber band. `,
    `Why did the golfer bring two pairs of pants to the course? In case he got a hole in one.`,
    `Why did the boy wear his coat to dinner? Because chili was on the menu`,
    `Did you hear about the baseball player who got arrested? He stole second base.`,
    `Why aren't kids allowed to see pirate movies  ? They're all rated arrrrr.`,
    `How much does it cost to hire a deer? A buck. `,
    `How did police catch the thief who robbed an Apple store? There was an iWitness.`,
    `Why did the coffee cup file a police report? It got mugged`,
    `Did you hear about the kidnapping at school? Thankfully, someone woke her up.`,
    `What kind of scientists avoid the sun? Paleontologists`,
    `Why did the financial planner quit his job? He was losing interest`,
    `Did you hear about the guy who decided to hang mirrors for a living? It's something he could see himself doing.`,
    `Why do frogs like playing baseball? They're good at c atching fly balls.`,
    `How did Noah sail his ark at night? Using floodlights.`,
    `How do lumberjacks know how many trees they’ve c  ut down? They keep a log.`,
    `Why are sports stadiums so chilly? Too many fans. `,
    `Where do cows get their clothes? From cattle-logs.`,
    `What kind of socks should you buy a bear? one. They prefer to go barefoot.`,
    `How do honeybees get to school? On the buzz.  `,
    `Why did Darth Vader go to the dermatologist? He had Star Warts`,
    `Did you hear about the light that got arrested? It went to prism. `,
    `Why did the beach get embarrassed? Becuse it noticed the sea weed`,
    `I'm obsessed with telling airport jokes. My doctor says it's a termi  nal problem. For Adults`,
    `I was going to tell you a joke about sodium, but then  I thought, “Na.”`,
    `What's a pirate's favorite subject in school? Arrrr-t.`,
    `Did you hear about the killer whale that learned to play the flute? He wanted to be in the orca-stra.`,
    `What do you call a crocodile that's always causing trouble An insta-gator.`,
    `I think I'm addicted to cheese. Don't worry, i's only mild.`,
    `What kind of shoes do breadsticks wear? Loafers.  `,
    `Why shouldn't you trust trees? They can be a little shady.`,
    `Why didn't the skeleton go skydiving? He didn't have the guts.`,
    `If you find out when fishing season begins, let minnow`,
    `What's the best way to make an octopus laugh? With tentickles.`,
    `Why did the frog take the bus to work? His car got toad.  `,
    `Why did the man name his puppy “Timex”? He wanted a watc  hdog.`,
    `Why did the pony eat a cough drop? It was a little h  orse.`,
    `What do mermaids wear under their shirts? Algae-bras.`,
    `What did the salmon say after hitting a wall? “Dam!”  `,
    `How do you stop a bull from charging? Take away his credit card.  `,
    `Did you hear about the gardener who was excited for spring?   She wet her plants.`,
    `What gift did the dentist get upon retiring? A little plaque  .`,
    `Why are barbers always on time? They know a lo of shortcuts.`,
    `What do bananas wear around the house? Slippers.  `,
    `Why did the spoon quit his job?   He was going stir-crazy.  `,
    `I told a bad chemistry joke once. It didn't get much of a reaction.`,
    `What did the pirate say at his 80th birthday party? “Aye, Matey!” `,
    `Why shouldn't you play hide-and-seek at a hospital? You'll always be   found in the ICU.`,
    `Did you hear about the guy who was afraid of hurdles? He got   over it.`,
    `Why are elephants so wrinkled? No one knows how to iron t hem.`,
    `How many skunks does it take to make a stink? Just a phew.`,
    `What did one sick vampire say to the other? “Is that you  coffin?”`,
    `When is a car not a car? When it turns into a par king lot.`,
    `Why don't insects get sick? They have anty-bodies.`,
    `Did you hear about the guy who deposited his watch at the bank? He wanted to save time.`,
    `What's a donut's favorite song? “Cruller Summer”  `,
    `Why do chickens have a lot of parties? They enjoy hen-tertaining. `,
    `Why did the pigs move? They were living in a   high-grime neighborhood. `,
    `I just had the dentist pull out all my teeth. I'm never doing tha t again.`,
    `Why don't seashells take baths? Because they wash up on th beach.`,
    `Why shouldn't you trust jungle animals? They'r always lion.`,
    `What do fish use to buy groceries? Sand dollars.  `,
    `Did you hear about the robbery at the glue factory? It was a sickup.`,
    `Why did the suspenders go to jail? They held up a pai r of pants.`,
    `Why don't mountains ever get col  d? They have snowcaps.`,
    `Knock, knock! Who's there? Bary. Barry who? Barry nice to meet you.  `,
    `Knock, knock! Who's there? Aid. Aida who? Aida bi lunch and now I'm full.`,
    `Knock, knock! Who's there? Iona. Iona who? Iona car. Do you?`,
    `Knock, knock! Who's there? Ash. A sh who?! Need a tissue?`,
    `Knock, knock! Who's there? Arthur. Arthur  who? Arthur any o  re knock-knock jokes?`,
    `Knock, knock! Who's there? Impati ent duck. Impatient duck ... QUACK!  `,
    `Knock, knock! Who's there? Barbie . Barbie who? Barbie-cue is my favorite. `,
    `Knock, knock! Who's there? Dwayn  e. Dwayne who? Dwayne the tu  b, bathtime is over.`,
    `Knock, knock! Who's there? Birds  . Birds who? No, but owls do.`,
    `Knock, knock! Who's there? Harry.  Harry who? Harry up and let me   in!`,
    `Knock, knock! Who's there? Alison. Alison who? Alison Wonderland. `,
    `Knock, knock! Who's there? Shirley.   Shirley who? Shirley you must know who I am by now`,
    `Knock, knock! Who's there? Norma   Lee. Norma Lee who? Norma Lee I don't tell a lot of knock-knock jokes.`,
    `Knock, knock! Who's there? Jewel  . Jewel who? Jewel know when you open the door`,
    `Knock, knock! Who's there? Pooh. Pooch who? Pooch your coat on, it's chilly out.`,
    `Knock, knock! Who's there? Weed.  Weed who? Weed make a cute couple. Let's go out! `,
    `Knock, knock! Who's there? Appeal . Appeal who? Appeal is what you find on a banana`,
    `Knock, knock! Who's there? Catsu  p. Catsup who? Catsup in a tree, better get a la  dder.`,
    `Knock, knock! Who's there? Gena. Genoa who? Genoa good barber? I need a haircut.`,
    `Knock, knock! Who's there? Hank.  Hank who? Oh, you're welcome!`,
    `Knock, knock! Who's there? Neele. Needle who? Needle little loan, I'm short on cash this month.`,
    `Knock, knock! Who's there? Abby. Abby who? Abby birthday to you!`,
];


    var color;
    var colorArray = [
        "#FF6633",
        "#FFB399",
        "#FF33FF",
        "#FFFF99",
        "#00B3E6",
        "#E6B333",
        "#3366E6",
        "#999966",
        "#809980",
        "#E6FF80",
        "#1AFF33",
        "#999933",
        "#FF3380",
        "#CCCC00",
        "#66E64D",
        "#4D80CC",
        "#FF4D4D",
        "#99E6E6",
        "#6666FF"
    ];
    // for (var i = 0; i < colorArray; i++) {
       
    // }




let body = document.querySelector(".container");

// Show Button Function
let showButton = () => {
    body.innerHTML = `,<button id="start">Start Jokes</button>`;
}
showButton();

let randomNum = 0;

// add event listener function on start button
let startBtn = document.querySelector("#start");
startBtn &&startBtn.addEventListener("click", () => {
   displayJoke();          
})

let displayJoke = () => {
    // random jokes
    randomNum = Math.floor(Math.random()*arr.length);
    // Joke box
    body.innerHTML = `<div class="box">
    <h1>Funny Joke</h1>
    <p>${arr[randomNum]}</p>
    <button id="next">Next</button>
    </div>`;

    // Random box color
    color = colorArray[Math.floor(Math.random() * colorArray.length)];
    let box = document.querySelector(".box")
    box.style.background = color;
    
    // add event listener function on next button
    let nextBtn = document.querySelector("#next");
    nextBtn && nextBtn.addEventListener("click", displayJoke);
    
}