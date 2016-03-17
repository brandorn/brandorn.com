---
layout: post
category: writing
active: writing

title: UX and the Liberal Arts
location: Bloomington
---

<figure>
  <img src="img/ux-and-the-la/intro.png" alt="UX and the Liberal Arts">
</figure>

<div class="asided first">
	<p class="intro">A presentation given to undergraduates at my alma mater, to make the case why liberal arts students make excellent user experience designers. <sup>1</sup> The idea for the presentation came in part from Steve Jobs' <a href="https://www.youtube.com/watch?v=KlI1MR-qNt8">conviction</a> that "Technology alone is not enough...it’s technology married with liberal arts, married with the humanities, that yields us the result that makes our heart’s sing."</p>

	<aside> 
		<p><sup>1</sup> For the sake of simplicity, and to avoid delving into disciplinary turf wars, I simplified the work of user experience design into information architecture, user research, and interaction design.</p>

		<p>This handout accompanied the presentation:</p>

		<figure>
			<a href="img/ux-and-the-la/handout.pdf"><img src="img/ux-and-the-la/handout.png" alt="PDF handout from the preso."></a>
		</figure>
	</aside>
</div>


<hr class="line">

Hi everyone. Thanks for coming tonight, and thanks to Robyn and Warren for the chance to speak.

My name is Brandon Dorn. I graduated from IWU in 2011 with a major in English Literature and a minor in Economics, and now work at State Farm as a user experience designer. Tonight I’m going to discuss the field of user experience design. I’ll give an overview of the discipline, describe some methods and examples, give some recommendations, and finish with reasons why you, as liberal arts students, would be brilliant UX designers and should consider pursuing this kind of work.

---

When I was a sophomore, I attended a presentation in this auditorium given by IWU alumni with degrees in English. As a recently-declared English major, I was listening ardently for advice about how to use my major to make a livable wage after graduating, or at least enough money to allow me to continue buying books and sandwiches. The people speaking were well dressed and didn’t look anemic, so I was hopeful.

The panel members shared stories about how they networked to find their first jobs, and worked silly gigs along the way that taught them life lessons, and about how their ability to speak and write made them stand out. Mostly, however, they emphasized how their time at Wesleyan trained them to *think critically*, which to me sounded mystical and flaky. 

I’ll have more to say about critical thought later, but suffice it to say that it sounded like a consolation prize for studying something that I loved instead of learning a skill that would lead directly to gainful employment. But the panel members had jobs, even ones they enjoyed, and I couldn’t argue with that.

A few years removed from that evening, I realize that I was both right and wrong about how my Liberal Arts degree would serve me along my career path. I was right that critical thought isn’t a skill. I was wrong that it was useless. At IWU I learned habits of thought that provided a foundation for the skills I would later pick up — skills that *require* the habits of thought that I learned. UX design, I’ve come to believe, is one way to get paid to think critically, and for those with an interest in design in general, it can be quite fun.

## On UX

I'll begin by saying that you don’t need to be a designer to do UX design. The term “design” is vague and intimidating and glossy. It sounds like something that happens only in cities or Silicon Valley. In reality, design happens any time you make something. The word “design” comes from the Latin *designare*, meaning “to designate,” and so carries a connotation of *intent*. It makes design a verb, not a noun, much less a job title. It makes it the act of “[putting thought into things](https://ia.net/know-how/putting-thought-into-things).”

<figure>
	<img src="img/ux-and-the-la/designare.png" alt="Mini etymology of the word design.">
</figure>

---

Consider some of the websites that you often visit. Facebook, Pinterest, Etsy, Twitter, Spotify, Evernote, Tumblr, YouTube. We use these websites daily, perhaps you even use them multiple times a day.

<figure class="double-wide">
  <img src="img/ux-and-the-la/screenshots-2.png" alt="Screenshots of well-designed web applications.">
</figure>

They exist, they’re free, and they’re easy to use, so we don’t think to much about them. However, maybe because I was born just before the fluorescent dawn of the Internet, I come to them with a persistent curiosity. I want to know how the screen before me came to be. What kind of people worked on it? How did they make it? Why did they use a button instead of a link? Why is it impossible to find anything on this website, whereas everything is exactly where I expect it to be on this one? Why does this one make me hate life when this one makes me want to cheer? Why and how was it *designed*?

It isn’t likely that you’re as compulsively inquisitive about the Internet as I am, but I imagine you’re somewhat interested. It is, after all, a technology used the world round, and one we’d be hard-pressed to do without.

I learned that building a website is comparable to building a home. First, you lay a foundation and put up a frame. The frame is a basic language called HTML: hypertext markup language. You can write an HTML page in a text editor, drag your file into a browser, and you’ve made a webpage. With the frame up, you might start wiring cables, creating plumbing, installing light sockets and the like. A language, like Javascript, builds on HTML and gives your website some additional functionality. Since our house has a frame and electricity and water, we now start to make it look like a real house, adding drywall and flooring and painting it a nice color. *Stylesheets* are used to make web applications look great. *CSS*, Cascading Stylesheets, is the language employed to this end.

<figure class="three-up left">
  <img src="img/ux-and-the-la/frame.png" alt="Photo of Frank Lloyd Wright inspecting the foundation of Taliesin West.">
  <figcaption class="smallest-type"><a href="http://www.architectmagazine.com/practice/seeking-the-wright-path-at-taliesin-west_o">Frank Lloyd Wright Foundation Archives</a></figcaption>
</figure>

<figure class="three-up">
  <img src="img/ux-and-the-la/circuitry.png" alt="Screenshots of well-designed web applications.">
  <figcaption class="smallest-type"><a href="http://www.taliesin.edu/history.html">Taliesin.edu</a></figcaption>
</figure>

<figure class="three-up right">
  <img src="img/ux-and-the-la/styling.png" alt="Screenshots of well-designed web applications.">
  <figcaption class="smallest-type"><a href="http://cs.wikipedia.org/wiki/Taliesin_West">Wikipedia</a></figcaption>
</figure>

In general, this is how websites work: a frame, circuitry, and styling.

Homes are physically built by contractors and their teams, yet they’re *designed* by architects. And typically, architects leave the *feng shui* to interior designers. In the world of web design, contractors are web developers. They build the underlying foundation and circuitry of web applications. Interior designers are user interface designers and developers. They make sure the home matches the personality of the people living there. The architect, thinking about the overall purpose and setting and meaning of the home, is the UX designer.

To extend our analogy further, a home built by a contracting company would be very different from a home first designed by an architecture firm. It would have all of the necessities: walls, ceilings, plumbing, carpet, yet it likely wouldn’t be an interesting, meaningful place to live. On the other hand, a home built by an interior designer would have lovely furniture, ornate and intricate details, yet wouldn’t be structurally sound. A home built by talented contractors, interior designers, and an architect has the potential to be beautiful and useful.

If a developer makes sure the website works, and the UI designer crafts the visual tone of the website, the UX designer defines the website’s overall intention and structure. Are we building a bungalow or a mansion or a warehouse? Should it be environmentally-friendly? Does the family have kids? Could a person with disabilities easily get around? They make sure the website being built is made for the people who will use it.

All of the websites I mentioned - the Spotifys and Etsys - have UX design teams who collaborate with development teams to make the final product.

(As a side note, some websites just show you text: these are called static websites. Others are a little fancier, like Tumblr or YouTube. The official term for these is *web applications*. Facebook is a *web application*. IWU has a *website.* From here on, I’ll use the term ”digital product” to describe the kinds of things UX designers work on, since they can be websites, web applications, or really anything displayed on a screen.)

<figure>
  <img src="img/ux-and-the-la/digital-products.png" alt="Rough definition of digital products as anything displayed on a screen.">
</figure>

---

Briefly defined, **UX is the attempt to make digital products make sense**. If something about a product is confusing to someone, a UX designer assumes fault in the design and not in the person.

Think about it this way: We all make things. Maybe may sew a hat for a friend, or write an essay for a class, or make a sandwich in Saga. Every single thing we make has an interface. A book has a page, a hammer has a handle, a sandwich has two pieces of bread. These planes — interfaces — are how we interact with the thing. How we make it do our bidding. You read and turn a page, swing a hammer, hold a sandwich.

<figure class="to-the-right">
  <img src="img/ux-and-the-la/sandwich.png" alt="Yours truly, holding a sandwich.">
  <figcaption>Yours truly, holding and regarding a sandwich.</figcaption>
</figure>

UX designers are interested in interfaces because interfaces are the plane of interaction between a person and a product, digital and otherwise. When interfaces are designed according to how we think or what we can do, they make sense to us. Many interfaces, however, aren’t, and don’t. I’ll illustrate this with a physical product.

When I was in Junior High, I had a thing called a Cybiko. This was just before cell phones, when text messaging was so cutting-edge that you needed to buy a $120 device to send a friend a digital note instead of writing it on paper and sneaking it to his desk. The Cybiko came with a small stylus, without which you had considerable difficulty pushing the buttons on the keyboard. Needless to say, it took a while to write and send a message. At the time, it was the greatest thing, the Cybiko. Sure, it was hard to use, but I made do, and it worked. My friend with a Cybiko and I messaged each other, most likely about how cool it was to send a text message.

<figure class="to-the-left">
  <img src="img/ux-and-the-la/cybiko.png" alt="The Cybiko, a kind of precursor to mobile phones.">
  <figcaption>Behold, the Cybiko. <a href="http://www.sciencemuseum.org.uk/online_science/explore_our_collections/objects/index/smxg-8366254">sciencemuseum.org.uk</a></figcaption>
</figure>

Nifty as it was, this device wasn’t made for people. It was made for people holding a stylus to push tiny buttons. Some might call the Cybiko a bad user experience. (Some might also say this about similarly-made devices. Blackberry, we're looking at you.) Although it did what I wanted it to do, send a message to a friend, it required me to conform to its awkward design in order to do so. The Cybiko was poorly designed because it didn’t fit human capabilities — our fingers — and this is why you’ve never heard about it.

I use the Cybiko as an example because usability problems with physical products are pretty obvious. However, digital products can have usability problems, too. We saw this on a national scale last fall with the initial failure of the Healthcare.gov website:

<blockquote>
  <p>Just a trickle of the 14.6 million people who have visited the federal exchange so far have managed to enroll in insurance plans.... And some of those enrollments are marred by mistakes.</p>
  <cite>"<a href="http://www.nytimes.com/2013/10/13/us/politics/from-the-start-signs-of-trouble-at-health-portal.html?_r=0">From the Start, Signs of Trouble at Health Portal</a>," New York Times, 12 Oct 2013</cite>
</blockquote>

This was a UX problem, at least in part.

<hr class="line">

When things meet our expectations, when they prove to be useful, when they make sense, we like them and use them. If asked, we might describe these kinds of things with the words “intuitive” or “user-friendly.” We don’t need to think too much about it to use it. And if something is useful, intuitive, and it surprises us with something nice, we might describe it as delightful. Whenever you use these words, somewhere a UX designer gets their wings.

One more point about the discipline of UX. The design of physical products, like your Android phone or Honda Civic, is the domain of product designers, who typically have a background in engineering, 3D rendering, and material science. Product designers are like UX designers’ cool older brothers. Yet the distinction between physical and digital products is fading: the design of software now influences the design of hardware, and vis versa. As a rule of thumb, product designers work on hardware, and UX designers work on software.

<figure>
  <img src="img/ux-and-the-la/ux-and-product-design.png" alt="Image of an iPhone, illustrating that UX designers work on the software and product designers work on the hardare.">
</figure>

## Methods

There isn’t really one right way to do UX, since the nature of each project influences the approach UX designers take. Likewise, every UX designer’s approach depends on their interest and skills and the kinds of projects they work on. Nevertheless, there are a handful of methods and tools that UX designers use to contribute their part to the creation of digital products.

The work of UX design can roughly be divided into research and design. Here’s an overview of the disciplines that comprise UX design, emphasizing information architecture, interaction design, and communication design. User research, information architecture and interaction design are the three we’ll look at.

<figure>
  <img src="img/ux-and-the-la/ux-discipline-diagram.png" alt="Venn diagram showing the overlap of UX design, interaction design, and related disciplines.">
  <figcaption class="smallest-text"><a href="http://visual.ly/disciplines-user-experience-design">The Disciplines of User Experience Design</a></figcaption>
</figure>

### User Research and Information Architecture

Since UX designers are in the sense-making business, they’re interested in how people think about things–particularly the users of their application. Research is the art of listening and observing. In this case, UX designers research people.  They want to understand how people understand, translating insights from *user research* into the *information architecture* of a product. I'll describe some methods which will clarify these terms.

#### User Interviews

UX designers want to talk with normal people, not design-y people. Facebook wants to know how moms think about their profile pages. TurboTax wants to know how twentysomethings think about taxes. So UX designers regularly meet with people to ask open-ended questions about topics concerning the digital product.

The reason UX designers are interested in people-people is because they are trying to solve people problems with their products. Conversations with users help to reveal the actual problems to solve. When Facebook first came out, it solved the problem of not being able to rate who was hotter than who. Over time, however, it has tried to solve the more important problem of human connection. Whether it has, or can, is the topic of another conversation.

#### Personas

<figure class="to-the-left">
  <img src="img/ux-and-the-la/personas.png" alt="Photo these goofy family stickers people put on the back of their minivans.">
</figure>

Personas are the types of people who use a product–those who currently do, or those who might.

For example, let’s say UX design team at TurboTax begins to notice that there are generally three ways that people deal with taxes: some put them off until the last minute (they are called “Procrastinators”), some who keep all of their documents in a folder for each tax year and pay them in January (“Planners”), and some who don’t know anything at all about taxes (“Newbies”). TurboTax’s product has to account for each type of user. Maybe one of the UX designers is more of a Procrastinator, and so is to come up with solutions that serve that type of user. However, knowing that folks deal differently with taxes, the team will consider how to design for the range of usage. Maybe TurboTax needs to offer an option to manually enter every piece of information, and a more guided, step-by-step approach, both of which it has.

#### User stories

UX designers try to think broadly about the people who use their digital products. When might they use it? Would they be in a library or on a bus? What might they be feeling? What are they setting out to accomplish? What are the steps they'll need to take?

To do this, they write stories. Perhaps they try to envision the entire process for booking a train ticket, for example, starting with planning a trip and ending with the return leg home. Airbnb, an online service for renting rooms and homes, has an inventive [approach](http://www.fastcompany.com/3002813/how-snow-white-helped-airbnbs-mobile-mission) to writing user stories.

#### Card sorts

<figure class="to-the-right">
  <img src="img/ux-and-the-la/card-sorts.png" alt="Photo of a person arranging notecards.">
  <figcaption class="smallest-type"><a href="http://notlaura.com/card-sorting-and-brain-cleansing-games/">Laura Schenck</a></figcaption>
</figure>

UX designers want to understand how people categorize information in their mind. These categories are called *mental models*. One way to reveal mental models is through *card sorting* exercises, which ask users to organize descrete bits of information in ways that makes sense to them. Single pieces of information are written on notecards, shuffled, then given to a person who is asked to arrange them into categories.

Imagine if someone printed all of your photos, shuffled them in a box, dumped them on a floor, and asked you to organize them. How would you? Chronologically? By color? By the people in the photos? It might depend on what you want to do with them, or how you can most easily find them once organized.

Card sorts help identify meaningful categories of information, which is especially important when designing navigation structures. Grocery store aisles are an example of categories and navigation. Next time you go to Kroger, consider, why are these items in the same aisle? Is this marketing, or does it make sense?

#### Sitemaps

A sitemap is the schematic for a website. It shows how all of the pages and sections relate to one another. Usually they’re just boxes and lines showing the hierarchical structure of a site, and are the beginnings of the navigation system. UX designers try to create sitemaps according to the mental models of their users.

[Apple's](http://apple.com) website, for example, has a straightforward, comprehensive navigation menu that likely began as a sitemap diagram. You can get most everywhere you need to in a few clicks. And, like all good websites, users are provided access to its full [sitemap](http://apple.com/sitemap).

### Interaction Design

If user research and information architecture are about how people understand information, interaction design is about how people *interact* with information. This is the “design” aspect of UX design. Putting thought into a thing.

#### Wireframes

Wireframes are the bare bones of a website. The term comes from product design, where wires are sculpted into three dimensional models to resemble the finished product. They’re like visual rough drafts, a low-fidelity version of a website that’s used to try out ideas and spot problems early on.

<figure class="to-the-left">
  <img src="img/ux-and-the-la/wireframe.png" alt="Screenshot of some rough wireframes.">
</figure>

Nearly all of my wireframes begin as pencil and paper sketches. After drawing some ideas, I’ll then use a tool like Adobe Illustrator to create clearer versions of the pages that can be emailed or projected.

Once a sitemap has been drafted, UX designers start considering the layout of individual pages. We want to prioritize the most important information on the page, just as a journalist moves from most- to least-pertinent when writing an article. Also important to consider is what information to *exclude*.

#### Prototypes

The simplest, most efficient way to try out an idea or share one with someone else is to draw a sketch. A pencil-and-paper wireframe sketch can be shared with users for feedback. This is called paper prototyping. However, it can be difficult to represent digital interactions, like clicking a button, with paper. So UX designers sometimes creates a higher-fidelity wireframe, or may make basic pages with HTML and CSS to simulate the product in an actual browser.

Prototpying is cyclical: sketch an idea, get input, edit it, make a higher fidelity version, get input, edit it. It requires a certain measure of doggedness, yet the process becomes a kind of refining fire that reveals ideas and avoids future mistakes.

#### Usability Tests

<figure class="to-the-right">
  <img src="img/ux-and-the-la/usability-test.png" alt="Photo of a usability testing lab.">
  <figcaption class="smallest-type"><a href="http://www.uqul.uq.edu.au/">Queensland Usability Lab</a></figcaption>
</figure>

A usability problem is something in a web application that trips a user up. They clicked “view” and were taken to a new page when they wanted to stay put. They clicked “buy” and their card was charged before they wanted it to be. To conduct a usability test, UX designers  meet with people and ask them to do various things in a web application. They’re watching to see what confuses them, or what takes time to figure out. After a series of these tests, they start to notice patterns. Everyone clicks the wrong button on a page, for example, or people abandon their cart at a certain point.

---

In reality, research and design methods blend and overlap, all depending on the project and the people. Some people refer to themselves as information architects, some as interaction designers, some as user researchers. Yet, to some extent, all of the UX designers I’ve read and met do some of all of the above.

I should note, too, that my descriptions might seem to indicate that UX designers work in isolation when in reality they collaborate with their team throughout a product lifecycle, checking in, receiving input, testing ideas, and asking questions. The actual process is much messier and more interesting.

## Examples

I’ve described the work of UX without giving examples. Let’s look at a few cases.

### Amazon

Amazon began in 1994, a year after the Internet officially came about. Here is a screenshot of their navigation four years later. They’re using tabs to define the main categories of the website: Books and Music, and then Videos and Gifts. But by 1999, these categories were too restrictive, so they added more tabs. *Three* layers of tabs. From 2000 to 2003, they try a few different arrangements, and try to differentiate the tabs from each other in cute ways. By 2005, however, they have *31 product categories*, so tabs are no longer an option. Instead, they use search as the main navigation convention rather than tabs, while allowing users to filter their search by category. This is more or less the Amazon interface we know and love today.

<figure class="three-up left">
  <img src="img/ux-and-the-la/amazon-tabs-1.png" alt="Screenshot of Amazon at an early stage.">
  <figcaption class="smallest-type"><a href="http://www.lukew.com/ff/entry.asp?178">Luke Wroblewski</a></figcaption>
</figure>

<figure class="three-up">
  <img src="img/ux-and-the-la/amazon-tabs-2.png" alt="Screenshot of Amazon at an early stage.">
</figure>

<figure class="three-up right">
  <img src="img/ux-and-the-la/amazon-tabs-4.png" alt="Screenshot of Amazon today.">
</figure>

Amazon’s navigation evolved in response to their growing business. Had the principles of good UX design not guided this evolution, we may have ended up with a mess of tabs and links to wade through to find our Three Wolf Moon T-shirts.

#### Gmail

Gmail was released in 2004, and looks remarkably similar eleven Internet years later, which is roughly 109 people-years. The interface has clear categories and terms for your mail, and the actions you can take are obvious and easy to access. The interface might not have been this natural. Early prototypes show that we might have ended up with a cluttered array of windows within the browser, or a disjoint set of tabs for navigating to different areas of our mail.

Prototyping different interface options before releasing the beta version of Gmail (which notoriously remained “in beta” until 2009) prompted the team to find ways of arranging the interface elements to better suit people’s use of email. And while there have been recent attempts to redesign email, Mailbox being one, they all take cues from the conventions established by Gmail.

<figure class="three-up left">
  <img src="img/ux-and-the-la/gmail-1.png" alt="Screenshot of Gmail at an early stage.">
  <figcaption class="smallest-type"><a href="http://mashable.com/2014/03/29/gmail-design-evolution/">Mashable</a></figcaption>
</figure>

<figure class="three-up">
  <img src="img/ux-and-the-la/gmail-2.png" alt="Screenshot of Gmail at an early stage.">
</figure>

<figure class="three-up right">
  <img src="img/ux-and-the-la/gmail-3.png" alt="Screenshot of Gmail today.">
</figure>

#### gov.uk

Government websites are notoriously difficult to navigate and understand, messes of jargon and outdated information and confusing hierarchies. Last year, in an effort to “make digital services so good that people prefer to use them,” the UK government established the “[Digital by Default Service Standard](https://www.gov.uk/service-manual/digital-by-default).” The Standard is a set of criteria to be used for redesigning the government’s 25 most-used web applications. Here is the first criterion:

> Understand user needs. Research to develop a deep knowledge of who the service users are and what that means for digital and assisted digital service design.

Here’s another:

> Create a service that is simple and intuitive enough that users succeed first time, unaided.

The Standard is a UX undertaking. Here’s a case study of how the Claim Carer’s Allowance service was transformed from a lengthy, paper-based process to a more streamlined digital product. Claim Carer’s Allowance provides money for folks who look after people in need.

<figure>
  <iframe style="width: 100%" class="center mb-3" width="560" height="315" src="https://www.youtube.com/embed/IYBLX3V8ek4" frameborder="0" allowfullscreen></iframe>
</figure>

<hr class="line">

In making these points, I don't mean to credit UX designers for all smart web design. Excellent design comes from teams that work together and good ideas can come from anyone. However, the discipline of UX design attempts to systematize the way in which digital products conform to people rather than asking people to conform to the product, which is what everyone's after. UX design makes sure the right questions are being asked and offers methodologies for finding answers: “Who are we making this for?” “What do they care about?” “How do they think about it?” “How do they use it?”

## The Liberal Arts

At the beginning of this presentation I said that you, as liberal arts students, are some of the best candidates for UX design, and that you don’t need to be a designer to be a UX designer. Hopefully you’re beginning to sense analogies between your studies and this kind of work. Here are some connections I’ve recognized, which I put forth as my case:

1. **You listen to learn.** UX design requires curiosity. Liberal arts students are curious. They are characteristically unwilling to receive information or experience secondhand. You read primary sources, study abroad, meet with professors, conduct your own research. You are interested in learning others’ perspectives as you form your own, and don’t rely on others for motivation.

	A UX designer’s primary role is to learn about people. They also learn about technology, to know the possibilities and limits of what can be done. Armed with knowledge about people and technology, they can create meaningful products.

	UX designers need to be able to share their knowledge and translate it into design, yet everything they discover stems from their own resourceful curiosity, not a lesson plan or set of instructions.

2. **You uncover patterns and tensions**. UX design is about solving problems. When trying to figure out what to write about for an English essay, I was once told that I should write about what doesn’t make sense to me. I learned to look for apparent incongruities in art and argument and wrestle with them. Over time I learned to write about patterns, too, especially in novels. What keeps showing up? Why?

	Liberal arts students attend to tensions and patterns in their studies. They uncover layers of reason or appearance in order to get to the truth about something. They look for common threads that hint at underlying meanings.

	UX designers realize that the only way to meaningfully solve a problem is to do the patient, sometimes tedious work of research. They aren’t interested in shiny; they’re interested in useful, and meaningful. It’s up to the UX designer to identify the real problem beneath superficial symptoms, which that can’t be done without intellectual discipline. And once defined, problems require patient labor, like a dog worrying a bone. Most problems do not present an obvious solution. Once created, however, the best solutions are obvious. I like how Einstein put it: ”It’s not that I’m so smart, it’s just that I stay with problems longer.”

	The folks redesigning gov.uk’s Claim Carer’s Allowance service didn’t just create an interface; they renovated the process.

	No matter where you work, you’re going to be solving problems. When most people encounter a problem, they come up with the quickest solution and use it, mostly because solving problems is difficult work and requires the labor of investigation. Yet the quickest solution, more often than not, doesn’t actually solve the problem. It solves the symptom, the proverbial lipstick on a pig.

3. **You’re multidisciplined**. UX design is multidisciplinary. Liberal arts students involve themselves in a range of academic disciplines outside of their primary studies. They learn terms, theories, and insights that expand their sense of their own major and, in the process, become intellectually well-traveled. They come to see knowledge as it really is: a network, rather than silos.

	The discipline of UX is itself interdisciplinary, drawing from Psychology (the study of the mind), Anthropology (the study of culture), Philosophy (the study of value), Art (the study of beauty), and Computer Science (the study of digital technology). By learning UX, one is really learning about everything else.

	Furthermore, UX designers work with people across a range of disciplines to solve a range of problems. Their ability to move freely between contexts, whether discussing wireframes with a developer or asking a user about how she finds ideas for her home, enables them to turn research into design.

4. **You act on possibilities**. UX design is fundamentally optimistic. Liberal arts students have a kind of rugged optimism about them. After all, they chose to study something for love rather than economic potential. I applaud them, and you, for listening to your heart rather than taking cues from economic forecasts when determining your course of study. Students’ optimism is evident in their academic work, their activities, and their interests. You see possibility.

	By “optimism,” I don’t mean an empty wishful thinking. Instead, I mean something closer to the word “liberal,” which, in its broadest sense carries connotations of openness and generosity. It has the same root as the word “love.” Critical thought is optimistic because it argues in order to find the truth — not simply for the sake of argument. You think critically, but you don’t think cynically. Critical thought is practical and creative; cynical thought is destructive. There is a difference.

	Every meaningful thing, whether a web application or Cybiko, is the result of practical optimism. Things may not be equally meaningful or well-designed, but they are made with the belief that meaningful change can happen.

	By the way, this is one reason why, I think, liberal arts students end up being so successful in the world. Their sense of possibility is attractive, and people want to work with them.

<hr class="line">

The technologists of our day come up with interesting things, but it’s up to UX designers to figure out how to make them meaningful. And liberal arts students are specialists in meaning. As one person put it,

<blockquote>
	<p>Technology alone is not enough...it’s technology married with liberal arts, married with the humanities, that yields us the result that makes our heart’s sing.</p>
	<cite><a href="https://www.youtube.com/watch?v=KlI1MR-qNt8">Steve Jobs</a></cite>
</blockquote>


## Recommendations

If you’re interested in this, you’re likely wondering what to do next. IWU doesn’t offer classes in UX design, after all. Here are some ways to start:

1. **Read about UX**. Everything we’ve discussed tonight is an introduction to the discipline. A lot of great things been written about each aspect — about methodology, examples, principles, the nature of the work — and I’ve listed some sources that I’ve found helpful in the handout. If something tonight has caught your attention, learn more about it.

2. **Deconstruct design**. Start to look at all types of products — digital and otherwise — with a critical eye. Uncover the decisions that went into the design. Why this layout? Why this new feature? Why this material, color, font type? Consider what a design is trying to accomplish, and whether it does so. For extra credit, learn how to use the Chrome browser’s Inspector and look beneath the hood of the webpage at its source code. See how it’s put together.

	I mentioned CSS earlier. To give you a sense of how stylesheets work, this is what YouTube looks like normally, and this is what it looks like without its stylesheet. With the CSS turned off, you can see the basic structure of the page. This is their HTML. With the stylesheet turned on, you can see how they’ve pulled off an extreme makeover. Pretty nifty.

	<figure class="two-up left">
	  <img src="img/ux-and-the-la/youtube.png" alt="Screenshot of YouTube looking its usual self.">
	</figure>

	<figure class="two-up right mb-3">
	  <img src="img/ux-and-the-la/youtube-no-css.png" alt="Screenshot of YouTube with CSS turned off, looking pretty Web 1.0.">
	</figure>

3. **Learn the web**. Over the years, certain conventions have been established as a kind of “rules of the road” for designing for the web. Think of the way all cars are fundamentally similar: they have a steering wheel, pedals, seat belts, and trunks. Their appearances and proportions may differ, but the essential elements are present.

	Learning web standards is a kind of classical education for UX design. You’ll know the fundamentals, and so will know when to follow the rules and and when to break them. I’ve listed some resources I’ve found helpful in the handout, each of which you can find online.

4. **Be resourceful**. After graduating, I worked at an advertising agency in Chicago for a year and a half as an account planner. I researched people and brands and wrote strategic briefs for creative teams. When my wife moved to Bloomington for a new job, I found a position at State Farm as a Technical Writer (she was my soon-to-be-fiancée at the time, so I was open to most any job). Assuming I was a graphic designer, some folks in my new department asked me to help out with the design of the department’s web applications. Over the next year and a half, I began learning the principles and methods of UX design as well as the fundamentals of web development, unwittingly transitioning from writer to designer.

	There wasn’t another UX designer in my department for me to learn from. I say that, because wherever you work there probably won’t be one. But in all likelihood, your company or restaurant or bookstore could benefit from having someone who knows how to do user research, or logically structure a website navigation. So look for opportunities to evolve your work. It takes patience and diligence, and you have to earn others’ trust, learning how to explain the value of UX design. Try to work at places that are forward-thinking. They needn’t be trendy, but try to sense their openness to ideas. You’ll have more opportunity to mold your position at places like that. Always keep your eyes open.

	In other words, you don’t need to work for a Google or Yahoo to do UX design. Over time you may want to work at a design agency, or go to school for UX design. But you don’t have to. A majority of UX designers are self-taught.

5. **Make things**. Try building a website. Define an intention, sketch a design, research how to make it. Work with some friends on a project for your community. Apply some UX design methodologies to your work. See what works and what doesn’t. Design is about experimentation, and you’ll begin developing the ability to translate thought into thing, which is easier said than done.

## Why UX?

I’d like to close with a few thoughts on why UX design is worth doing at all. These convictions have resulted from my own ambivalent relationship with digital technology — I’m an English major, recall — and my coming to terms with the way digital technology has come to pervade our lives.

1. **Digital interfaces are the way of things**. Digital interfaces offer flexibility and accessibility that analog interfaces don’t, which is one reason why we’re making everything digital. However, we can determine the nature of these interfaces. We’re making them, after all. We can design them for people and what they can do, or we can design in response to the current technology and what it can do. One way amplifies human capabilities, the other makes things that are trendy but meaningless and distracting.

2. **UX affects everyone**. I mentioned the Healthcare.gov debacle earlier, which was a failure of both technical infrastructure (the servers were overloaded) and UX design. The failure didn’t just affect people with the latest iPhone — it affected everyone trying to sign up for subsidized health insurance. Digital products are no longer used by the privileged or technologically-minded, but are depended upon on a national and international scale. They’re increasingly important for how we live our lives.

	The other day I visited the doctor for a routine checkup, and the doctor seeing me let me know that they had recently received a new software system for managing patient information. It took her fifteen minutes to enter maybe ten pieces of information about me, and, looking over her shoulder, I was mostly at a loss to help. The actual checkup took maybe three minutes. She was highly intelligent; the problem was with the design, not with her.

3. **UX humanizes our world**. UX is not a new role. It began when a caveman first attached a rock to a stick with a rough leather cord to make a hammer. It’s the act of making a technology that fits ourselves, and makes sense to us, and ultimately helps us make sense of the world. The best products feel as though they were made with each of us in mind, and in this sense almost feel like gifts. Like a good novel, they make us feel understood, and connected to the world. To my mind, this is the highest aspiration of anything we could make, to make something gift-like, and UX helps us toward that end.

*Thanks*.

