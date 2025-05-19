import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

type CommandOutput = {
  type: 'command' | 'output';
  content: string;
}

export default function Terminal() {
  const { t, i18n } = useTranslation();
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentCommand, setCurrentCommand] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus terminal input when clicked anywhere in the terminal
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  // Simple blink effect for cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  // Initialize welcome messages when component mounts or language changes
  useEffect(() => {
    // Reset history with welcome messages in current language
    setHistory([
      { type: 'output', content: t('terminal.welcome.line1') },
      { type: 'output', content: t('terminal.welcome.line2') },
      { type: 'output', content: t('terminal.welcome.line3') }
    ]);
  }, [t, i18n.language]);
  
  // Auto-scroll to bottom on new command/output
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);
  
  // Process commands
  const handleCommand = (cmd: string) => {
    // Add command to history
    setHistory(prev => [...prev, { type: 'command', content: `$ ${cmd}` }]);
    
    // Process command
    const command = cmd.trim().toLowerCase();
    let output: string[] = [];
    
    switch (command) {
      case 'help':
        output = [
          t('terminal.help.intro'),
          `- about: ${t('terminal.help.about')}`,
          `- skills: ${t('terminal.help.skills')}`,
          `- experience: ${t('terminal.help.experience')}`,
          `- projects: ${t('terminal.help.projects')}`,
          `- contact: ${t('terminal.help.contact')}`,
          `- clear: ${t('terminal.help.clear')}`
        ];
        break;
        
      case 'about':
        output = [
          t('terminal.about.line1'),
          t('terminal.about.line2'),
          t('terminal.about.line3')
        ];
        break;
        
      case 'skills':
        output = [
          t('terminal.skills.title'),
          `• ${t('terminal.skills.ai')}`,
          `• ${t('terminal.skills.netcore')}`,
          `• ${t('terminal.skills.python')}`,
          `• ${t('terminal.skills.cloud')}`,
          `• ${t('terminal.skills.system')}`,
          `• ${t('terminal.skills.database')}`
        ];
        break;
        
      case 'experience':
        output = [
          t('terminal.experience.title'),
          `• ${t('terminal.experience.job1.title')}`,
          `  ${t('terminal.experience.job1.description')}`,
          `• ${t('terminal.experience.job2.title')}`,
          `  ${t('terminal.experience.job2.description')}`,
          `• ${t('terminal.experience.job3.title')}`,
          `  ${t('terminal.experience.job3.description')}`
        ];
        break;
        
      case 'projects':
        output = [
          t('terminal.projects.title'),
          `• ${t('terminal.projects.project1')}`,
          `• ${t('terminal.projects.project2')}`,
          `• ${t('terminal.projects.project3')}`,
          `• ${t('terminal.projects.project4')}`
        ];
        break;
        
      case 'contact':
        output = [
          t('terminal.contact.title'),
          `• ${t('terminal.contact.email', '• Email: Minaibrahem.youssef@gmail.com')}`,
          `• ${t('terminal.contact.email2', '• Email: Mina@Minanarmer.com')}`,
          `• ${t('terminal.contact.github', '• GitHub: github.com/MinaNarmer')}`,
          `• ${t('terminal.contact.linkedin', '• LinkedIn: linkedin.com/in/minayousef')}`,
          `• ${t('terminal.contact.whatsapp', '• WhatsApp: +201003260417')}`,
          `• ${t('terminal.contact.location', '• Location: Cairo, Egypt')}`
        ];
        break;
        
      case 'clear':
        setHistory([]);
        break;
        
      default:
        if (command !== '') {
          output = [t('terminal.error.unknown', { command: cmd })];
        }
    }
    
    // Add output to history (if not clear command)
    if (command !== 'clear' && output.length > 0) {
      output.forEach(line => {
        setHistory(prev => [...prev, { type: 'output', content: line }]);
      });
    }
    
    // Clear current command
    setCurrentCommand('');
  };
  
  // Handle input submission
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
    }
  };
  
  return (
    <div className="w-full max-w-xl mx-auto">
      <div 
        className="rounded-lg overflow-hidden shadow-2xl border border-gray-800"
        onClick={focusInput}
      >
        {/* Terminal header */}
        <div className="bg-gray-800 px-4 py-2 flex items-center">
          <div className="flex space-x-2 rtl:space-x-reverse">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-sm mx-auto font-mono">
            Mina Narmer
          </div>
        </div>
        
        {/* Terminal content */}
        <div 
          ref={terminalRef}
          className="bg-gray-900 text-green-400 p-4 h-64 font-mono text-sm overflow-y-auto cursor-text" 
          dir="ltr"
        >
          {/* Command history */}
          {history.map((item, index) => (
            <div key={index} className="text-green-400">
              {item.content}
            </div>
          ))}
          
          {/* Current command line */}
          <div className="flex items-center mt-1">
            <span className="text-green-400 mr-2">$</span>
            <span className="relative flex-grow">
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-green-400 outline-none caret-transparent"
                autoFocus
              />
              <span className="absolute left-0">
                {currentCommand}
                <span className={`inline-block w-2 h-4 ${cursorVisible ? 'bg-green-400' : 'bg-transparent'}`}></span>
              </span>
            </span>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-3 text-sm text-gray-400">
        🚀 {t('terminal.tip')}
      </div>
    </div>
  );
}