import TechContentLayout from "@/components/blog/TechContentLayout";
import { useTranslation } from "react-i18next";

export default function KidsProgrammingRoadmap() {
  const { t } = useTranslation();
  
  return (
    <TechContentLayout 
      title={t("kidsProgramming.title", "Kids Programming & Computer Learning Roadmap")}
      description={t("kidsProgramming.description", "A comprehensive guide to teaching children about computers, programming, and AI concepts.")}
    >
      <section>
        <h2>{t("kidsProgramming.intro.title", "Introduction to Teaching Children Programming")}</h2>
        <p>
          {t("kidsProgramming.intro.content", "Teaching children about computers and programming at an early age helps develop critical thinking, problem-solving skills, and digital literacy. This roadmap provides a structured approach to introducing children to the world of technology, from basic computer concepts to programming fundamentals and even AI concepts.")}
        </p>
        
        <div className="mt-4 p-4 bg-amber-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-bold">{t("kidsProgramming.intro.ageGroups.title", "Age-Appropriate Learning:")}</h4>
          <ul className="mt-2">
            <li>{t("kidsProgramming.intro.ageGroups.ages5_7", "Ages 5-7: Basic computer interaction, visual block programming")}</li>
            <li>{t("kidsProgramming.intro.ageGroups.ages8_10", "Ages 8-10: Game-based learning, introduction to coding concepts")}</li>
            <li>{t("kidsProgramming.intro.ageGroups.ages11_13", "Ages 11-13: Text-based programming languages, simple projects")}</li>
            <li>{t("kidsProgramming.intro.ageGroups.ages14Plus", "Ages 14+: Advanced concepts, specialized areas, AI fundamentals")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("kidsProgramming.computerBasics.title", "Phase 1: Computer Basics & Digital Literacy")}</h2>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.computerBasics.fundamentals.title", "Computer Fundamentals")}</h3>
          <ul>
            <li><strong>{t("kidsProgramming.computerBasics.fundamentals.parts", "Parts of a Computer:")}</strong> {t("kidsProgramming.computerBasics.fundamentals.partsDesc", "Understanding hardware components (monitor, keyboard, mouse, CPU)")}</li>
            <li><strong>{t("kidsProgramming.computerBasics.fundamentals.os", "Operating Systems:")}</strong> {t("kidsProgramming.computerBasics.fundamentals.osDesc", "Introduction to different operating systems (Windows, MacOS, Linux)")}</li>
            <li><strong>{t("kidsProgramming.computerBasics.fundamentals.files", "Files & Folders:")}</strong> {t("kidsProgramming.computerBasics.fundamentals.filesDesc", "Basic file management, creating folders, saving work")}</li>
            <li><strong>{t("kidsProgramming.computerBasics.fundamentals.internet", "Internet Basics:")}</strong> {t("kidsProgramming.computerBasics.fundamentals.internetDesc", "How the internet works, web browsers, online safety")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.computerBasics.digitalLiteracy.title", "Digital Literacy Skills")}</h3>
          <ul>
            <li><strong>{t("kidsProgramming.computerBasics.digitalLiteracy.typing", "Typing:")}</strong> {t("kidsProgramming.computerBasics.digitalLiteracy.typingDesc", "Games and activities to develop keyboard skills")}</li>
            <li><strong>{t("kidsProgramming.computerBasics.digitalLiteracy.tools", "Basic Tools:")}</strong> {t("kidsProgramming.computerBasics.digitalLiteracy.toolsDesc", "Introduction to word processors, paint programs, calculators")}</li>
            <li><strong>{t("kidsProgramming.computerBasics.digitalLiteracy.safety", "Online Safety:")}</strong> {t("kidsProgramming.computerBasics.digitalLiteracy.safetyDesc", "Privacy, appropriate content, and responsible digital citizenship")}</li>
            <li><strong>{t("kidsProgramming.computerBasics.digitalLiteracy.media", "Digital Media:")}</strong> {t("kidsProgramming.computerBasics.digitalLiteracy.mediaDesc", "Creating and sharing digital content appropriately")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.computerBasics.activities.title", "Recommended Activities")}</h3>
          <ul>
            <li>{t("kidsProgramming.computerBasics.activities.games", "Educational computer games that teach mouse control and keyboard familiarity")}</li>
            <li>{t("kidsProgramming.computerBasics.activities.storytelling", "Digital storytelling with simple presentation tools")}</li>
            <li>{t("kidsProgramming.computerBasics.activities.art", "Digital art projects using basic drawing programs")}</li>
            <li>{t("kidsProgramming.computerBasics.activities.tutorials", "Guided tutorials on basic computer operations")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("kidsProgramming.programmingBasics.title", "Phase 2: Programming Fundamentals")}</h2>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.programmingBasics.concepts.title", "Core Programming Concepts")}</h3>
          <ul>
            <li><strong>{t("kidsProgramming.programmingBasics.concepts.algorithms", "Algorithms:")}</strong> {t("kidsProgramming.programmingBasics.concepts.algorithmsDesc", "Step-by-step instructions to solve problems")}</li>
            <li><strong>{t("kidsProgramming.programmingBasics.concepts.sequences", "Sequences:")}</strong> {t("kidsProgramming.programmingBasics.concepts.sequencesDesc", "Ordering instructions in the correct sequence")}</li>
            <li><strong>{t("kidsProgramming.programmingBasics.concepts.loops", "Loops:")}</strong> {t("kidsProgramming.programmingBasics.concepts.loopsDesc", "Repeating actions multiple times")}</li>
            <li><strong>{t("kidsProgramming.programmingBasics.concepts.conditionals", "Conditionals:")}</strong> {t("kidsProgramming.programmingBasics.concepts.conditionalsDesc", "Making decisions in code (if-then statements)")}</li>
            <li><strong>{t("kidsProgramming.programmingBasics.concepts.variables", "Variables:")}</strong> {t("kidsProgramming.programmingBasics.concepts.variablesDesc", "Storing and using information")}</li>
            <li><strong>{t("kidsProgramming.programmingBasics.concepts.events", "Events:")}</strong> {t("kidsProgramming.programmingBasics.concepts.eventsDesc", "Making things happen when triggered")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.programmingBasics.blockCoding.title", "Visual Block-Based Coding")}</h3>
          <ul>
            <li><strong>{t("kidsProgramming.programmingBasics.blockCoding.scratch", "Scratch:")}</strong> {t("kidsProgramming.programmingBasics.blockCoding.scratchDesc", "MIT's visual programming environment for creating games and animations")}</li>
            <li><strong>{t("kidsProgramming.programmingBasics.blockCoding.code", "Code.org:")}</strong> {t("kidsProgramming.programmingBasics.blockCoding.codeDesc", "Structured courses with popular characters and themes")}</li>
            <li><strong>{t("kidsProgramming.programmingBasics.blockCoding.blockly", "Blockly Games:")}</strong> {t("kidsProgramming.programmingBasics.blockCoding.blocklyDesc", "Google's block coding puzzles and games")}</li>
            <li><strong>{t("kidsProgramming.programmingBasics.blockCoding.tynker", "Tynker:")}</strong> {t("kidsProgramming.programmingBasics.blockCoding.tynkerDesc", "Game-based platform with Minecraft integration")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.programmingBasics.introText.title", "Introduction to Text-Based Programming")}</h3>
          <ul>
            <li><strong>{t("kidsProgramming.programmingBasics.introText.python", "Python:")}</strong> {t("kidsProgramming.programmingBasics.introText.pythonDesc", "Beginner-friendly language with clear syntax")}</li>
            <li><strong>{t("kidsProgramming.programmingBasics.introText.javascript", "JavaScript:")}</strong> {t("kidsProgramming.programmingBasics.introText.javascriptDesc", "Web-focused programming with immediate visual results")}</li>
            <li><strong>{t("kidsProgramming.programmingBasics.introText.tools", "Kid-Friendly IDEs:")}</strong> {t("kidsProgramming.programmingBasics.introText.toolsDesc", "Simplified development environments like Thonny for Python")}</li>
            <li><strong>{t("kidsProgramming.programmingBasics.introText.transition", "Transitioning Tips:")}</strong> {t("kidsProgramming.programmingBasics.introText.transitionDesc", "Moving from blocks to text through hybrid platforms like Tynker's Python courses")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.programmingBasics.projects.title", "Beginner Programming Projects")}</h3>
          <ul>
            <li>{t("kidsProgramming.programmingBasics.projects.animations", "Simple animations and interactive stories")}</li>
            <li>{t("kidsProgramming.programmingBasics.projects.games", "Basic games like Pong or Maze Runner")}</li>
            <li>{t("kidsProgramming.programmingBasics.projects.quizzes", "Interactive quizzes and trivia games")}</li>
            <li>{t("kidsProgramming.programmingBasics.projects.art", "Creative coding art projects using loops")}</li>
            <li>{t("kidsProgramming.programmingBasics.projects.calculator", "Simple calculator or conversion tools")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("kidsProgramming.hardware.title", "Phase 3: Hardware & Physical Computing")}</h2>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.hardware.platforms.title", "Kid-Friendly Hardware Platforms")}</h3>
          <ul>
            <li><strong>{t("kidsProgramming.hardware.platforms.microbit", "micro:bit:")}</strong> {t("kidsProgramming.hardware.platforms.microbitDesc", "Pocket-sized computer with LEDs, sensors, and Bluetooth")}</li>
            <li><strong>{t("kidsProgramming.hardware.platforms.arduino", "Arduino:")}</strong> {t("kidsProgramming.hardware.platforms.arduinoDesc", "Electronics platform for creating interactive projects")}</li>
            <li><strong>{t("kidsProgramming.hardware.platforms.raspberry", "Raspberry Pi:")}</strong> {t("kidsProgramming.hardware.platforms.raspberryDesc", "Single-board computer for various programming projects")}</li>
            <li><strong>{t("kidsProgramming.hardware.platforms.lego", "LEGO Robotics:")}</strong> {t("kidsProgramming.hardware.platforms.legoDesc", "LEGO Mindstorms and SPIKE Prime for robotics")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.hardware.projects.title", "Physical Computing Projects")}</h3>
          <ul>
            <li>{t("kidsProgramming.hardware.projects.led", "LED light patterns and displays")}</li>
            <li>{t("kidsProgramming.hardware.projects.robots", "Simple robots that can follow lines or avoid obstacles")}</li>
            <li>{t("kidsProgramming.hardware.projects.weather", "Weather stations or environmental monitors")}</li>
            <li>{t("kidsProgramming.hardware.projects.games", "Physical games with buttons and lights")}</li>
            <li>{t("kidsProgramming.hardware.projects.wearables", "Wearable technology projects")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.hardware.skills.title", "Skills Developed")}</h3>
          <ul>
            <li>{t("kidsProgramming.hardware.skills.circuits", "Basic electronics and circuit understanding")}</li>
            <li>{t("kidsProgramming.hardware.skills.realWorld", "Connecting programming to real-world interactions")}</li>
            <li>{t("kidsProgramming.hardware.skills.engineering", "Engineering and design thinking")}</li>
            <li>{t("kidsProgramming.hardware.skills.debugging", "Physical debugging and troubleshooting")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("kidsProgramming.ai.title", "Phase 4: Introduction to AI Concepts")}</h2>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.ai.concepts.title", "Basic AI Concepts for Kids")}</h3>
          <ul>
            <li><strong>{t("kidsProgramming.ai.concepts.what", "What is AI:")}</strong> {t("kidsProgramming.ai.concepts.whatDesc", "Explaining artificial intelligence in kid-friendly terms")}</li>
            <li><strong>{t("kidsProgramming.ai.concepts.ml", "Machine Learning:")}</strong> {t("kidsProgramming.ai.concepts.mlDesc", "How computers learn from data and examples")}</li>
            <li><strong>{t("kidsProgramming.ai.concepts.pattern", "Pattern Recognition:")}</strong> {t("kidsProgramming.ai.concepts.patternDesc", "Finding patterns in information")}</li>
            <li><strong>{t("kidsProgramming.ai.concepts.ethics", "AI Ethics:")}</strong> {t("kidsProgramming.ai.concepts.ethicsDesc", "Responsible AI use and understanding biases")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.ai.tools.title", "Kid-Friendly AI Tools")}</h3>
          <ul>
            <li><strong>{t("kidsProgramming.ai.tools.machinelearning", "Machine Learning for Kids:")}</strong> {t("kidsProgramming.ai.tools.machinelearningDesc", "Web-based tool for creating projects with machine learning")}</li>
            <li><strong>{t("kidsProgramming.ai.tools.cognimates", "Cognimates:")}</strong> {t("kidsProgramming.ai.tools.cognimatesDesc", "AI education platform with playful learning experiences")}</li>
            <li><strong>{t("kidsProgramming.ai.tools.aiblocks", "AI Blocks:")}</strong> {t("kidsProgramming.ai.tools.aiblocksDesc", "Visual programming for neural networks")}</li>
            <li><strong>{t("kidsProgramming.ai.tools.quickdraw", "Quick, Draw!:")}</strong> {t("kidsProgramming.ai.tools.quickdrawDesc", "Google's drawing game that uses neural networks")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.ai.projects.title", "Simple AI Projects for Kids")}</h3>
          <ul>
            <li>{t("kidsProgramming.ai.projects.imageRecognition", "Image recognition: Training a computer to recognize drawings or objects")}</li>
            <li>{t("kidsProgramming.ai.projects.textGen", "Text generation: Creating simple chatbots or story generators")}</li>
            <li>{t("kidsProgramming.ai.projects.games", "AI in games: Creating simple games with computer opponents")}</li>
            <li>{t("kidsProgramming.ai.projects.voice", "Voice command projects: Building simple voice-controlled applications")}</li>
          </ul>
        </div>
      </section>
      
      <section className="mt-10">
        <h2>{t("kidsProgramming.progressPath.title", "Continuous Learning & Progress Path")}</h2>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.progressPath.advancement.title", "Advancing Their Skills")}</h3>
          <ul>
            <li><strong>{t("kidsProgramming.progressPath.advancement.compSci", "Computer Science Principles:")}</strong> {t("kidsProgramming.progressPath.advancement.compSciDesc", "Introduction to algorithms, data structures, and computational thinking")}</li>
            <li><strong>{t("kidsProgramming.progressPath.advancement.webDev", "Web Development:")}</strong> {t("kidsProgramming.progressPath.advancement.webDevDesc", "HTML, CSS, and JavaScript for creating websites")}</li>
            <li><strong>{t("kidsProgramming.progressPath.advancement.mobileDev", "Mobile App Development:")}</strong> {t("kidsProgramming.progressPath.advancement.mobileDevDesc", "Creating simple mobile applications")}</li>
            <li><strong>{t("kidsProgramming.progressPath.advancement.gameDev", "Game Development:")}</strong> {t("kidsProgramming.progressPath.advancement.gameDevDesc", "Using game engines like Unity or Godot")}</li>
          </ul>
        </div>
        
        <div className="my-6">
          <h3>{t("kidsProgramming.progressPath.resources.title", "Learning Resources")}</h3>
          <ul>
            <li><strong>{t("kidsProgramming.progressPath.resources.online", "Online Learning Platforms:")}</strong> {t("kidsProgramming.progressPath.resources.onlineDesc", "Khan Academy, Codecademy, Udemy Kids")}</li>
            <li><strong>{t("kidsProgramming.progressPath.resources.clubs", "Coding Clubs & Communities:")}</strong> {t("kidsProgramming.progressPath.resources.clubsDesc", "CoderDojo, Code Club, Girls Who Code")}</li>
            <li><strong>{t("kidsProgramming.progressPath.resources.competitions", "Competitions & Challenges:")}</strong> {t("kidsProgramming.progressPath.resources.competitionsDesc", "Hackathons, coding competitions, Scratch challenges")}</li>
            <li><strong>{t("kidsProgramming.progressPath.resources.yt", "YouTube Channels:")}</strong> {t("kidsProgramming.progressPath.resources.ytDesc", "Kid-friendly programming tutorials and project ideas")}</li>
          </ul>
        </div>
        
        <div className="mt-6 p-4 bg-amber-50 dark:bg-gray-800 rounded-lg">
          <h4 className="font-bold">{t("kidsProgramming.progressPath.parentTips.title", "Tips for Parents & Educators:")}</h4>
          <ul className="mt-2">
            <li>{t("kidsProgramming.progressPath.parentTips.interest", "Focus on interests: Connect programming to topics children already enjoy")}</li>
            <li>{t("kidsProgramming.progressPath.parentTips.creative", "Emphasize creativity: Coding is a creative expression tool, not just a technical skill")}</li>
            <li>{t("kidsProgramming.progressPath.parentTips.pace", "Go at their pace: Each child learns differently; let them progress at a comfortable speed")}</li>
            <li>{t("kidsProgramming.progressPath.parentTips.together", "Learn together: Explore new concepts alongside your child")}</li>
            <li>{t("kidsProgramming.progressPath.parentTips.celebrate", "Celebrate successes: Recognize and celebrate accomplishments, no matter how small")}</li>
          </ul>
        </div>
      </section>
    </TechContentLayout>
  );
}