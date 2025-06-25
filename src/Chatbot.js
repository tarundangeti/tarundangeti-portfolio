import { useState } from "react";
import axios from "axios";
import "./stylesheets/Chatbot.css";
import { FaRobot, FaPaperPlane, FaTimes, FaCommentDots } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY; 

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
  
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            { 
              parts: [
                {
                  text: `You are a chatbot integrated into the portfolio of **Garima Bhayana**, an AI-ML Engineer and  Full Stack Developer. Your job is to provide highly accurate, structured responses based on the details provided below.  
                  
                  **Profile Details:**  
                  - **Name:** Garima Bhayana  
                  - **Profession:** AI/ML Engineer | Full Stack Developer 
                  - **Skills:**  
                    - Programming Languages: Python, Java
                    - AI/ML: Supervised & Unsupervised Learning, Neural Networks, Natural
                    - Language Processing (NLP), Computer Vision, Generative AI, Data Analysis
                    - Web Technologies: HTML, CSS, JavaScript, WordPress
                    - Frameworks & Libraries:
                      - Frontend: React.js, jQuery, Bootstrap, Tailwind CSS
                      - Backend: Node.js, Express.js, Flask, EJS
                      - AI/ML: Scikit-Learn, TensorFlow, Keras, PyTorch, OpenCV
                    - Database Management: SQL, PostgreSQL, MongoDB
                    - Cloud Computing: AWS
                    - Version Control: Git
                    - Data Structures & Algorithms (DSA): Proficient in Java
                  - **Experience:**  
                    - Software Development Intern | AICTE (in collaboration with EY GDS) | March – April 2025
                      Developed CoCreate, a real-time collaborative text and code editing platform using MERN stack. Integrated Socket.IO for live editing, chat, and presence indicators.
                      Implemented permission-based access and AI assistance via Gemini API. Designed a clean, minimal UI with support for rich text formatting and multi-language code editing.
                      Ensured persistent collaboration and real-time syncing for multiple users across sessions.
                    - AI Intern | AICTE TechSaksham | January - February 2025
                      Crafted an AI-powered Medical Assistant during the AICTE Internship under Microsoft & SAP.
                      Implemented a Retrieval-Augmented Generation (RAG) system to process medical documents and provide accurate insights.
                      Integrated multimodal LLM (Llama-3.2-90b-vision-preview) with Groq API for text and image-based query processing.
                      Optimised knowledge retrieval with FAISS and Mistral LLM to enhance response accuracy.
                    - Coordinator | Training and Placement Cell, ADGIPS | October 2024 - Present
                      Collaborated with HR professionals and peers to execute placement drives impacting 200+ candidates.
                      Streamlined processes for applicant management and pre-placement activities.
                    - Contributor | GirlScript Summer of Code 2024- Extended | October - November 2024
                      Enhanced AI capabilities of existing applications, increasing user engagement.
                      Designed visually compelling brand identities, boosting project visibility across GitHub and community forums.
                  - **Projects:**  
                   1️⃣ AI-Powered Health Assistant – An advanced medical chatbot built using Retrieval-Augmented Generation (RAG) and multimodal LLMs. It provides reliable, context-aware health responses and supports image-based diagnostics, making healthcare assistance accessible and intelligent.
                   2️⃣ RoadMap Generator – A personalized learning roadmap generator powered by AI. Users input their goals, and the app uses the Cohere API to generate a structured, step-by-step learning path, helping individuals navigate their upskilling journey with clarity.
                   3️⃣ PeriodPal – A user-friendly menstrual cycle tracking web app built with React. It predicts upcoming periods and ovulation windows, enabling users to manage their health better through a clean and intuitive interface.
                   4️⃣ Text Summarizer – A text compression tool that uses Facebook's BART Large CNN model via Hugging Face to generate concise and meaningful summaries of lengthy texts, making content more digestible for users who seek quick insights.
                   5️⃣ Tree Visualizer – An interactive visualization platform for Binary Trees, BSTs, and Heaps. Built using D3.js, it helps students and learners understand tree-based data structures visually and intuitively through animations and examples.
                   6️⃣ Movie Manager – A movie and TV show organizer where users can create personalized watchlists, add notes, and track watched content. Developed with Node.js, Express, and EJS, it offers a clean interface for entertainment lovers to manage their collections.
                   7️⃣ Budget Manager – A financial planning assistant that utilizes machine learning to analyze spending habits and provide actionable insights. Built with Streamlit and Pandas, it enables users to manage their budget and optimize expenses with ease.
                   8️⃣ Thrifteria – A sustainable fashion marketplace powered by WordPress and WooCommerce. It promotes eco-friendly shopping by allowing users to buy and sell secondhand clothing in a stylish, easy-to-navigate platform.
                   9️⃣ CoCreate – A real-time collaborative document editor supporting text and code files. Features include role-based access control, AI assistance via Gemini API, multi-user synchronization using WebSockets, and a sleek, responsive UI for seamless teamwork.
                   🔟 WanderAI – An AI-driven travel planner that crafts custom itineraries based on user input. Powered by Google Gemini and Streamlit, it offers map-based destination previews, real-time suggestions, and PDF export functionality for a complete trip planning experience.
                   1️⃣1️⃣ IntelliAssist – An AI-powered virtual assistant capable of understanding voice commands, automating tasks, and fetching real-time information. Designed for productivity and convenience, it integrates automation with natural language processing for everyday tasks.
                  - **Contact Information:**  
                    📩 Email: [garimaabhayanaa@gmail.com](mailto:garimaabhayanaa@gmail.com)  
                    🐙 GitHub: [github.com/garimabhayanaa](https://github.com/garimabhayanaa)  
                    🔗 LinkedIn: [linkedin.com/in/garimabhayanaa](http://www.linkedin.com/in/garimabhayanaa)  
  
                  **Answer the user's question using only the information provided above. If the user asks something outside of Garima's profile, politely respond that you are designed to assist with questions related to Garima Bhayana's portfolio.  
  
                  **User Question:** ${input}`
                }
              ]
            }
          ]
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );
      console.log("API Response:", response.data);
  
      let botMessage = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text || 
                 response?.data?.content?.parts?.[0]?.text || 
                 "I'm not sure how to respond.";

      botMessage = botMessage.replace(/[*_-]/g, ""); // Remove Markdown symbols
  
      setMessages([...newMessages, { sender: "bot", text: botMessage }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error.response?.data || error.message);
      setMessages([...newMessages, { sender: "bot", text: "Sorry, I couldn't process your request right now." }]);
    }    
  };
    
  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <div className="chatbot-icon" onClick={() => setIsOpen(true)}>
          <FaCommentDots />
        </div>
      ) : (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <FaRobot className="chat-icon" />
            <span>Portfolio AI Chat</span>
            <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
          </div>
          <div className="chatbot-body">
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}><FaPaperPlane /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
