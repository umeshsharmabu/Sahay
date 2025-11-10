// Sahay - AI-Powered Job & Service Finder
// Application Logic with Working Login and Post Job Functionality

// Application Data
const appData = {
  jobs: [
    {
      id: 1,
      title: "Agricultural Equipment Operator",
      company: "Green Valley Farms",
      location: "Sonipat, Haryana",
      salary: "₹18,000 - ₹25,000",
      experience: "1-2 years",
      skills: ["Tractor Operation", "Farm Equipment", "Crop Management"],
      type: "Full-time",
      description: "Operate and maintain agricultural equipment for crop cultivation and harvesting.",
      posted: "2 days ago",
      aiMatch: 85
    },
    {
      id: 2,
      title: "Local Delivery Executive",
      company: "Village Connect Logistics",
      location: "Meerut, UP",
      salary: "₹15,000 - ₹20,000",
      experience: "0-1 years",
      skills: ["Two Wheeler Driving", "Local Area Knowledge", "Customer Service"],
      type: "Full-time",
      description: "Deliver goods within rural and semi-urban areas using motorcycle.",
      posted: "1 day ago",
      aiMatch: 92
    },
    {
      id: 3,
      title: "Village Health Worker",
      company: "Rural Health Initiative",
      location: "Bhopal, MP",
      salary: "₹12,000 - ₹18,000",
      experience: "0-2 years",
      skills: ["Basic Health Knowledge", "Community Outreach", "Hindi Fluency"],
      type: "Part-time",
      description: "Provide basic healthcare services and health education in rural communities.",
      posted: "3 days ago",
      aiMatch: 78
    },
    {
      id: 4,
      title: "Handicrafts Artisan",
      company: "Traditional Arts Cooperative",
      location: "Jaipur, Rajasthan",
      salary: "₹20,000 - ₹35,000",
      experience: "2-5 years",
      skills: ["Handloom Weaving", "Traditional Crafts", "Quality Control"],
      type: "Contract",
      description: "Create traditional handicrafts for export and local markets.",
      posted: "5 days ago",
      aiMatch: 67
    },
    {
      id: 5,
      title: "Mobile Repair Technician",
      company: "Tech Fix Rural Services",
      location: "Nashik, Maharashtra",
      salary: "₹16,000 - ₹28,000",
      experience: "1-3 years",
      skills: ["Mobile Repair", "Electronics", "Customer Service"],
      type: "Full-time",
      description: "Repair smartphones and basic electronics in rural service centers.",
      posted: "1 week ago",
      aiMatch: 89
    }
  ],
  services: [
    {
      id: 1,
      name: "Ramesh Kumar",
      service: "Tractor Services",
      location: "Panipat, Haryana",
      rating: 4.8,
      experience: "8 years",
      contact: "+91 9876543210",
      description: "Tractor plowing, seeding, and harvesting services for all crop types.",
      price: "₹800/hour",
      category: "agriculture"
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      service: "Mobile Health Services",
      location: "Sultanpur, UP",
      rating: 4.9,
      experience: "12 years",
      contact: "+91 9876543211",
      description: "Door-to-door healthcare services, vaccinations, and health checkups.",
      price: "₹300/visit",
      category: "health"
    },
    {
      id: 3,
      name: "Sunil Electricals",
      service: "Electrical Services",
      location: "Indore, MP",
      rating: 4.6,
      experience: "15 years",
      contact: "+91 9876543212",
      description: "House wiring, motor repairs, and solar panel installation.",
      price: "₹500/hour",
      category: "repair"
    },
    {
      id: 4,
      name: "Maya Tailoring",
      service: "Tailoring & Alterations",
      location: "Udaipur, Rajasthan",
      rating: 4.7,
      experience: "10 years",
      contact: "+91 9876543213",
      description: "Custom stitching, alterations, and traditional wear designing.",
      price: "₹200/piece",
      category: "other"
    },
    {
      id: 5,
      name: "Govind Transport",
      service: "Goods Transportation",
      location: "Aurangabad, Maharashtra",
      rating: 4.5,
      experience: "6 years",
      contact: "+91 9876543214",
      description: "Local and intercity goods transportation with loading/unloading.",
      price: "₹25/km",
      category: "transport"
    }
  ]
};

// Application State
let currentLanguage = 'en';
let currentTheme = 'light';
let currentSection = 'home';
let filteredJobs = [...appData.jobs];
let filteredServices = [...appData.services];
let isVoiceSearchActive = false;
let currentUser = null;
let isLoggedIn = false;

// Language Translations
const translations = {
  en: {
    'Find Jobs': 'Find Jobs',
    'Post Job': 'Post Job',
    'Voice Search': 'Voice Search',
    'All Locations': 'All Locations',
    'Any Experience': 'Any Experience',
    'All Types': 'All Types',
    'Load More Jobs': 'Load More Jobs',
    'All Services': 'All Services',
    'Healthcare': 'Healthcare',
    'Repair Services': 'Repair Services',
    'Transportation': 'Transportation',
    'Agriculture': 'Agriculture',
    'Contact': 'Contact',
    'Call': 'Call',
    'Apply Now': 'Apply Now',
    'View Details': 'View Details',
    'AI Match': 'AI Match',
    'years experience': 'years experience',
    'Send Message': 'Send Message',
    'Save Profile': 'Save Profile',
    'Save Job': 'Save Job',
    'Listening...': 'Listening...',
    'Voice search not supported': 'Voice search not supported in this browser',
    'Search jobs by title, skills, or company...': 'Search jobs by title, skills, or company...',
    'No jobs found': 'No jobs found',
    'Try adjusting your search criteria': 'Try adjusting your search criteria',
    'New AI Recommendation': 'New AI Recommendation',
    'Job Description': 'Job Description',
    'Required Skills': 'Required Skills',
    'AI Match Analysis': 'AI Match Analysis',
    'Login successful!': 'Login successful!',
    'Registration successful!': 'Registration successful!',
    'Job posted successfully!': 'Job posted successfully!',
    'Please fill in all required fields': 'Please fill in all required fields',
    'Passwords do not match': 'Passwords do not match',
    'Invalid email or password': 'Invalid email or password',
    'Welcome to Sahay!': 'Welcome to Sahay!',
    'Application submitted successfully!': 'Application submitted successfully!',
    'Message sent successfully!': 'Message sent successfully!',
    'Please login to post a job': 'Please login to post a job',
    'Logout': 'Logout'
  },
  hi: {
    'Find Jobs': 'नौकरी खोजें',
    'Post Job': 'नौकरी पोस्ट करें',
    'Voice Search': 'वॉयस सर्च',
    'All Locations': 'सभी स्थान',
    'Any Experience': 'कोई भी अनुभव',
    'All Types': 'सभी प्रकार',
    'Load More Jobs': 'और नौकरियाँ लोड करें',
    'All Services': 'सभी सेवाएं',
    'Healthcare': 'स्वास्थ्य सेवा',
    'Repair Services': 'मरम्मत सेवाएं',
    'Transportation': 'परिवहन',
    'Agriculture': 'कृषि',
    'Contact': 'संपर्क',
    'Call': 'कॉल',
    'Apply Now': 'अभी आवेदन करें',
    'View Details': 'विवरण देखें',
    'AI Match': 'AI मैच',
    'years experience': 'साल का अनुभव',
    'Send Message': 'संदेश भेजें',
    'Save Profile': 'प्रोफ़ाइल सेव करें',
    'Save Job': 'नौकरी सेव करें',
    'Listening...': 'सुन रहे हैं...',
    'Voice search not supported': 'इस ब्राउज़र में वॉयस सर्च समर्थित नहीं है',
    'Search jobs by title, skills, or company...': 'शीर्षक, कौशल या कंपनी द्वारा नौकरी खोजें...',
    'No jobs found': 'कोई नौकरी नहीं मिली',
    'Try adjusting your search criteria': 'अपने खोज मानदंड समायोजित करने का प्रयास करें',
    'New AI Recommendation': 'नई AI सिफारिश',
    'Job Description': 'नौकरी विवरण',
    'Required Skills': 'आवश्यक कौशल',
    'AI Match Analysis': 'AI मैच विश्लेषण',
    'Login successful!': 'लॉगिन सफल!',
    'Registration successful!': 'पंजीकरण सफल!',
    'Job posted successfully!': 'नौकरी सफलतापूर्वक पोस्ट की गई!',
    'Please fill in all required fields': 'कृपया सभी आवश्यक फील्ड भरें',
    'Passwords do not match': 'पासवर्ड मेल नहीं खाते',
    'Invalid email or password': 'अमान्य ईमेल या पासवर्ड',
    'Welcome to Sahay!': 'Sahay में आपका स्वागत है!',
    'Application submitted successfully!': 'आवेदन सफलतापूर्वक जमा किया गया!',
    'Message sent successfully!': 'संदेश सफलतापूर्वक भेजा गया!',
    'Please login to post a job': 'नौकरी पोस्ट करने के लिए कृपया लॉगिन करें',
    'Logout': 'लॉगआउट'
  }
};

// Initialize Application
function initApp() {
  setupEventListeners();
  loadUserPreferences();
  renderJobs();
  renderServices();
  checkOnlineStatus();
  updateLanguage();
  
  // Simulate AI recommendations after a delay
  setTimeout(() => {
    showAIRecommendation();
  }, 2000);
}

// Event Listeners Setup
function setupEventListeners() {
  console.log('Setting up event listeners...');

  // Navigation toggle for mobile
  const navToggle = document.getElementById('navToggle');
  if (navToggle) {
    navToggle.addEventListener('click', toggleMobileNav);
  }
  
  // Navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute('href').substring(1);
      navigateToSection(targetSection);
    });
  });
  
  // Hero buttons
  const findJobsBtn = document.getElementById('findJobsBtn');
  if (findJobsBtn) {
    findJobsBtn.addEventListener('click', () => navigateToSection('jobs'));
  }
  
  const postJobBtn = document.getElementById('postJobBtn');
  if (postJobBtn) {
    postJobBtn.addEventListener('click', handlePostJobClick);
  }
  
  // Language toggle
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
  }
  
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Voice search
  const voiceSearchBtn = document.getElementById('voiceSearchBtn');
  if (voiceSearchBtn) {
    voiceSearchBtn.addEventListener('click', toggleVoiceSearch);
  }
  
  // Search functionality
  const searchBtn = document.getElementById('searchBtn');
  const jobSearch = document.getElementById('jobSearch');
  if (searchBtn) searchBtn.addEventListener('click', performSearch);
  if (jobSearch) jobSearch.addEventListener('input', debounce(performSearch, 300));
  
  // Filters
  const locationFilter = document.getElementById('locationFilter');
  const experienceFilter = document.getElementById('experienceFilter');
  const typeFilter = document.getElementById('typeFilter');
  
  if (locationFilter) locationFilter.addEventListener('change', applyFilters);
  if (experienceFilter) experienceFilter.addEventListener('change', applyFilters);
  if (typeFilter) typeFilter.addEventListener('change', applyFilters);
  
  // Service categories
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      filterServices(e.currentTarget.dataset.category);
    });
  });
  
  // Login button
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', handleLoginClick);
  }
  
  // Modal close buttons
  const closeLoginModal = document.getElementById('closeLoginModal');
  const closeRegisterModal = document.getElementById('closeRegisterModal');
  const closePostJobModal = document.getElementById('closePostJobModal');
  const closeJobModal = document.getElementById('closeJobModal');
  
  if (closeLoginModal) closeLoginModal.addEventListener('click', () => hideModal('loginModal'));
  if (closeRegisterModal) closeRegisterModal.addEventListener('click', () => hideModal('registerModal'));
  if (closePostJobModal) closePostJobModal.addEventListener('click', () => hideModal('postJobModal'));
  if (closeJobModal) closeJobModal.addEventListener('click', () => hideModal('jobModal'));
  
  // Form submissions
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const postJobForm = document.getElementById('postJobForm');
  const contactForm = document.getElementById('contactForm');
  
  if (loginForm) loginForm.addEventListener('submit', handleLogin);
  if (registerForm) registerForm.addEventListener('submit', handleRegistration);
  if (postJobForm) postJobForm.addEventListener('submit', handlePostJob);
  if (contactForm) contactForm.addEventListener('submit', handleContactForm);
  
  // Modal backdrop clicks
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hideModal(modal.id);
      }
    });
  });
  
  // Online/offline detection
  window.addEventListener('online', () => updateOnlineStatus(true));
  window.addEventListener('offline', () => updateOnlineStatus(false));

  console.log('Event listeners setup complete');
}

// Authentication Functions
function handleLoginClick() {
  if (isLoggedIn) {
    logout();
  } else {
    showLoginModal();
  }
}

function handlePostJobClick() {
  if (isLoggedIn) {
    showPostJobModal();
  } else {
    showToast('Please login to post a job', 'warning', 'fas fa-exclamation-triangle');
    showLoginModal();
  }
}

function handleLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const submitBtn = e.target.querySelector('button[type="submit"]');
  
  if (!email || !password) {
    showToast(translate('Please fill in all required fields'), 'error', 'fas fa-exclamation-circle');
    return;
  }
  
  setButtonLoading(submitBtn, true);
  
  // Simulate API call
  setTimeout(() => {
    setButtonLoading(submitBtn, false);
    
    // Simple validation (in real app, this would be server-side)
    if (email.includes('@') && password.length >= 6) {
      currentUser = {
        name: 'User',
        email: email,
        type: 'job-seeker'
      };
      isLoggedIn = true;
      
      updateLoginButton();
      hideModal('loginModal');
      showToast(translate('Login successful!'), 'success', 'fas fa-check-circle');
      
      // Clear form
      document.getElementById('loginForm').reset();
    } else {
      showToast(translate('Invalid email or password'), 'error', 'fas fa-times-circle');
    }
  }, 1500);
}

function handleRegistration(e) {
  e.preventDefault();
  
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const phone = document.getElementById('registerPhone').value;
  const location = document.getElementById('registerLocation').value;
  const userType = document.getElementById('userType').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const submitBtn = e.target.querySelector('button[type="submit"]');
  
  if (!name || !email || !phone || !location || !userType || !password || !confirmPassword) {
    showToast(translate('Please fill in all required fields'), 'error', 'fas fa-exclamation-circle');
    return;
  }
  
  if (password !== confirmPassword) {
    showToast(translate('Passwords do not match'), 'error', 'fas fa-times-circle');
    return;
  }
  
  if (password.length < 8) {
    showToast('Password must be at least 8 characters long', 'error', 'fas fa-exclamation-circle');
    return;
  }
  
  setButtonLoading(submitBtn, true);
  
  // Simulate API call
  setTimeout(() => {
    setButtonLoading(submitBtn, false);
    
    currentUser = {
      name: name,
      email: email,
      phone: phone,
      location: location,
      type: userType
    };
    isLoggedIn = true;
    
    updateLoginButton();
    hideModal('registerModal');
    showToast(translate('Registration successful!') + ' ' + translate('Welcome to Sahay!'), 'success', 'fas fa-check-circle');
    
    // Clear form
    document.getElementById('registerForm').reset();
  }, 2000);
}

function handlePostJob(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const jobData = {};
  
  // Collect form data
  const fields = ['jobTitle', 'companyName', 'jobLocation', 'jobType', 'jobExperience', 'jobSalary', 'jobSkills', 'jobDescription', 'contactEmail'];
  
  for (let field of fields) {
    const value = document.getElementById(field).value.trim();
    if (!value) {
      showToast(translate('Please fill in all required fields'), 'error', 'fas fa-exclamation-circle');
      return;
    }
    jobData[field] = value;
  }
  
  const submitBtn = e.target.querySelector('button[type="submit"]');
  setButtonLoading(submitBtn, true);
  
  // Simulate API call
  setTimeout(() => {
    setButtonLoading(submitBtn, false);
    
    // Add job to local data (in real app, this would be sent to server)
    const newJob = {
      id: appData.jobs.length + 1,
      title: jobData.jobTitle,
      company: jobData.companyName,
      location: jobData.jobLocation,
      salary: jobData.jobSalary,
      experience: jobData.jobExperience,
      skills: jobData.jobSkills.split(',').map(s => s.trim()),
      type: jobData.jobType,
      description: jobData.jobDescription,
      posted: 'Just now',
      aiMatch: Math.floor(Math.random() * 30) + 70 // Random match score
    };
    
    appData.jobs.unshift(newJob);
    filteredJobs = [...appData.jobs];
    renderJobs();
    
    hideModal('postJobModal');
    showToast(translate('Job posted successfully!'), 'success', 'fas fa-check-circle');
    
    // Clear form
    document.getElementById('postJobForm').reset();
    
    // Navigate to jobs section to show the new job
    navigateToSection('jobs');
  }, 2000);
}

function logout() {
  currentUser = null;
  isLoggedIn = false;
  updateLoginButton();
  showToast('Logged out successfully', 'info', 'fas fa-sign-out-alt');
}

function updateLoginButton() {
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    if (isLoggedIn) {
      loginBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser ? currentUser.name : translate('Logout')}`;
      loginBtn.title = 'Click to logout';
    } else {
      loginBtn.innerHTML = 'Login';
      loginBtn.title = 'Click to login';
    }
  }
}

// Modal Functions
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function showLoginModal() {
  hideModal('registerModal');
  showModal('loginModal');
}

function showRegisterModal() {
  hideModal('loginModal');
  showModal('registerModal');
}

function showPostJobModal() {
  showModal('postJobModal');
}

// Toast Message Functions
function showToast(message, type = 'info', icon = 'fas fa-info-circle') {
  const toast = document.getElementById('messageToast');
  const toastIcon = document.getElementById('toastIcon');
  const toastMessage = document.getElementById('toastMessage');
  
  if (toast && toastIcon && toastMessage) {
    // Set content
    toastIcon.className = icon;
    toastMessage.textContent = message;
    
    // Set type
    toast.className = `toast-message ${type}`;
    
    // Show toast
    toast.classList.remove('hidden');
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      hideToast();
    }, 5000);
  }
}

function hideToast() {
  const toast = document.getElementById('messageToast');
  if (toast) {
    toast.classList.add('hidden');
  }
}

function setButtonLoading(button, loading) {
  if (loading) {
    button.classList.add('loading');
    button.disabled = true;
  } else {
    button.classList.remove('loading');
    button.disabled = false;
  }
}

// Navigation Functions
function toggleMobileNav() {
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.classList.toggle('active');
  }
}

function navigateToSection(sectionId) {
  console.log('Navigating to:', sectionId);
  
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionId;
    
    // Close mobile nav
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
      navMenu.classList.remove('active');
    }
    
    // Scroll to top of section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Language Functions
function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
  const currentLangSpan = document.getElementById('currentLang');
  if (currentLangSpan) {
    currentLangSpan.textContent = currentLanguage.toUpperCase();
  }
  updateLanguage();
  saveUserPreferences();
}

function updateLanguage() {
  // Update elements with data attributes
  const elements = document.querySelectorAll(`[data-${currentLanguage}]`);
  elements.forEach(element => {
    const text = element.getAttribute(`data-${currentLanguage}`);
    if (text) {
      element.textContent = text;
    }
  });
  
  // Update placeholders
  const placeholderElements = document.querySelectorAll(`[data-${currentLanguage}-placeholder]`);
  placeholderElements.forEach(element => {
    const placeholder = element.getAttribute(`data-${currentLanguage}-placeholder`);
    if (placeholder) {
      element.placeholder = placeholder;
    }
  });
  
  // Re-render dynamic content with new language
  renderJobs();
  renderServices();
}

// Theme Functions
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }
  
  saveUserPreferences();
}

// Voice Search Functions
function toggleVoiceSearch() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    showVoiceStatus(translate('Voice search not supported'), 'error');
    return;
  }
  
  if (isVoiceSearchActive) {
    stopVoiceSearch();
  } else {
    startVoiceSearch();
  }
}

function startVoiceSearch() {
  try {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    recognition.onstart = () => {
      isVoiceSearchActive = true;
      const voiceSearchBtn = document.getElementById('voiceSearchBtn');
      if (voiceSearchBtn) {
        voiceSearchBtn.classList.add('active');
      }
      showVoiceStatus(translate('Listening...'), 'active');
    };
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const jobSearch = document.getElementById('jobSearch');
      if (jobSearch) {
        jobSearch.value = transcript;
        performSearch();
      }
      stopVoiceSearch();
    };
    
    recognition.onerror = () => {
      showVoiceStatus('Error occurred during voice recognition', 'error');
      stopVoiceSearch();
    };
    
    recognition.onend = () => {
      stopVoiceSearch();
    };
    
    recognition.start();
  } catch (error) {
    showVoiceStatus(translate('Voice search not supported'), 'error');
  }
}

function stopVoiceSearch() {
  isVoiceSearchActive = false;
  const voiceSearchBtn = document.getElementById('voiceSearchBtn');
  if (voiceSearchBtn) {
    voiceSearchBtn.classList.remove('active');
  }
  
  const voiceStatus = document.getElementById('voiceStatus');
  if (voiceStatus) {
    voiceStatus.textContent = '';
  }
}

function showVoiceStatus(message, type = 'info') {
  const voiceStatus = document.getElementById('voiceStatus');
  if (voiceStatus) {
    voiceStatus.textContent = message;
    voiceStatus.className = `voice-status ${type}`;
    
    if (type !== 'active') {
      setTimeout(() => {
        voiceStatus.textContent = '';
        voiceStatus.className = 'voice-status';
      }, 3000);
    }
  }
}

// Search and Filter Functions
function performSearch() {
  const jobSearch = document.getElementById('jobSearch');
  const searchTerm = jobSearch ? jobSearch.value.toLowerCase().trim() : '';
  
  filteredJobs = appData.jobs.filter(job => {
    if (!searchTerm) return true;
    
    return job.title.toLowerCase().includes(searchTerm) ||
           job.company.toLowerCase().includes(searchTerm) ||
           job.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
           job.location.toLowerCase().includes(searchTerm);
  });
  
  applyFilters();
}

function applyFilters() {
  let filtered = [...filteredJobs];
  
  const locationFilter = document.getElementById('locationFilter');
  const experienceFilter = document.getElementById('experienceFilter');
  const typeFilter = document.getElementById('typeFilter');
  
  const locationValue = locationFilter ? locationFilter.value : '';
  if (locationValue) {
    filtered = filtered.filter(job => 
      job.location.toLowerCase().includes(locationValue.toLowerCase())
    );
  }
  
  const experienceValue = experienceFilter ? experienceFilter.value : '';
  if (experienceValue) {
    filtered = filtered.filter(job => {
      const jobExp = job.experience.toLowerCase();
      if (experienceValue === '0-1') return jobExp.includes('0-1');
      if (experienceValue === '1-3') return jobExp.includes('1-2') || jobExp.includes('1-3');
      if (experienceValue === '3-5') return jobExp.includes('2-5') || jobExp.includes('3-5');
      if (experienceValue === '5+') return jobExp.includes('5+') || parseInt(jobExp) >= 5;
      return true;
    });
  }
  
  const typeValue = typeFilter ? typeFilter.value : '';
  if (typeValue) {
    filtered = filtered.filter(job => 
      job.type.toLowerCase().includes(typeValue.toLowerCase())
    );
  }
  
  filteredJobs = filtered;
  renderJobs();
}

function filterServices(category) {
  if (category === 'all') {
    filteredServices = [...appData.services];
  } else {
    filteredServices = appData.services.filter(service => 
      service.category === category
    );
  }
  renderServices();
}

// Rendering Functions
function renderJobs() {
  const jobsList = document.getElementById('jobsList');
  if (!jobsList) return;
  
  if (filteredJobs.length === 0) {
    jobsList.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
        <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px;"></i>
        <h3>${translate('No jobs found')}</h3>
        <p>${translate('Try adjusting your search criteria')}</p>
      </div>
    `;
    return;
  }
  
  jobsList.innerHTML = filteredJobs.map(job => `
    <div class="job-card" onclick="showJobDetails(${job.id})">
      <div class="job-header">
        <div class="job-info">
          <h3 class="job-title">${job.title}</h3>
          <div class="job-company">${job.company}</div>
        </div>
        <div class="ai-match">
          <i class="fas fa-brain"></i>
          <span>${job.aiMatch}% ${translate('AI Match')}</span>
        </div>
      </div>
      
      <div class="job-details">
        <div class="job-detail">
          <i class="fas fa-map-marker-alt"></i>
          <span>${job.location}</span>
        </div>
        <div class="job-detail">
          <i class="fas fa-rupee-sign"></i>
          <span>${job.salary}</span>
        </div>
        <div class="job-detail">
          <i class="fas fa-clock"></i>
          <span>${job.experience}</span>
        </div>
        <div class="job-detail">
          <i class="fas fa-briefcase"></i>
          <span>${job.type}</span>
        </div>
      </div>
      
      <div class="job-skills">
        ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
      
      <div class="job-footer" style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center;">
        <span class="job-posted" style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">
          ${job.posted}
        </span>
        <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); applyToJob(${job.id})">
          ${translate('Apply Now')}
        </button>
      </div>
    </div>
  `).join('');
}

function renderServices() {
  const servicesList = document.getElementById('servicesList');
  if (!servicesList) return;
  
  servicesList.innerHTML = filteredServices.map(service => `
    <div class="service-card">
      <div class="service-header">
        <div class="service-info">
          <h3 class="service-name">${service.name}</h3>
          <div class="service-type">${service.service}</div>
        </div>
        <div class="service-rating">
          <i class="fas fa-star"></i>
          <span>${service.rating}</span>
        </div>
      </div>
      
      <div class="service-info">
        <div class="service-info-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>${service.location}</span>
        </div>
        <div class="service-info-item">
          <i class="fas fa-calendar-alt"></i>
          <span>${service.experience} ${translate('years experience')}</span>
        </div>
      </div>
      
      <p style="color: var(--color-text-secondary); margin: 16px 0;">${service.description}</p>
      
      <div class="service-price">${service.price}</div>
      
      <div class="service-actions">
        <button class="btn btn--primary" onclick="contactService('${service.contact}')">
          <i class="fas fa-phone"></i>
          ${translate('Call')}
        </button>
        <button class="btn btn--secondary" onclick="showServiceDetails(${service.id})">
          <i class="fas fa-info-circle"></i>
          ${translate('View Details')}
        </button>
      </div>
    </div>
  `).join('');
}

function showJobDetails(jobId) {
  const job = appData.jobs.find(j => j.id === jobId);
  if (!job) return;
  
  const modalTitle = document.getElementById('jobModalTitle');
  const modalBody = document.getElementById('jobModalBody');
  
  if (modalTitle) modalTitle.textContent = job.title;
  
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="job-detail-content">
        <div class="job-company-info">
          <h4>${job.company}</h4>
          <div class="job-meta" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin: 16px 0;">
            <div class="meta-item" style="display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-map-marker-alt" style="color: var(--color-text-secondary);"></i>
              <span>${job.location}</span>
            </div>
            <div class="meta-item" style="display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-rupee-sign" style="color: var(--color-text-secondary);"></i>
              <span>${job.salary}</span>
            </div>
            <div class="meta-item" style="display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-clock" style="color: var(--color-text-secondary);"></i>
              <span>${job.experience}</span>
            </div>
            <div class="meta-item" style="display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-briefcase" style="color: var(--color-text-secondary);"></i>
              <span>${job.type}</span>
            </div>
          </div>
        </div>
        
        <div class="ai-insights-detail" style="background: var(--color-bg-1); padding: 16px; border-radius: 8px; margin: 16px 0;">
          <h4 style="color: var(--color-primary); margin: 0 0 8px;">${translate('AI Match Analysis')}</h4>
          <div class="ai-match-bar">
            <div style="background: var(--color-secondary); height: 8px; border-radius: 4px; margin-bottom: 8px;">
              <div class="match-progress" style="width: ${job.aiMatch}%; background: var(--color-success); height: 8px; border-radius: 4px;"></div>
            </div>
            <span style="font-size: 14px;">${job.aiMatch}% compatibility based on your profile</span>
          </div>
        </div>
        
        <div class="job-description">
          <h4 style="margin: 16px 0 8px;">${translate('Job Description')}</h4>
          <p>${job.description}</p>
        </div>
        
        <div class="required-skills">
          <h4 style="margin: 16px 0 8px;">${translate('Required Skills')}</h4>
          <div class="skills-list" style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        </div>
        
        <div class="application-actions" style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
          <button class="btn btn--primary" onclick="applyToJob(${job.id})">
            <i class="fas fa-paper-plane"></i>
            ${translate('Apply Now')}
          </button>
          <button class="btn btn--secondary" onclick="saveJob(${job.id})">
            <i class="fas fa-bookmark"></i>
            ${translate('Save Job')}
          </button>
        </div>
      </div>
    `;
  }
  
  showModal('jobModal');
}

// Action Functions
function applyToJob(jobId) {
  const job = appData.jobs.find(j => j.id === jobId);
  if (job) {
    showToast(translate('Application submitted successfully!'), 'success', 'fas fa-check-circle');
    hideModal('jobModal');
  }
}

function saveJob(jobId) {
  showToast(translate('Save Job'), 'success', 'fas fa-bookmark');
}

function contactService(contact) {
  window.open(`tel:${contact}`, '_blank');
}

function showServiceDetails(serviceId) {
  const service = appData.services.find(s => s.id === serviceId);
  if (service) {
    showToast(`Contact: ${service.contact}`, 'info', 'fas fa-info-circle');
  }
}

// Form Handlers
function handleContactForm(e) {
  e.preventDefault();
  const submitBtn = e.target.querySelector('button[type="submit"]');
  
  setButtonLoading(submitBtn, true);
  
  setTimeout(() => {
    setButtonLoading(submitBtn, false);
    showToast(translate('Message sent successfully!'), 'success', 'fas fa-check-circle');
    e.target.reset();
  }, 1500);
}

// Utility Functions
function translate(key) {
  return translations[currentLanguage][key] || key;
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function showAIRecommendation() {
  const jobsSection = document.getElementById('jobs');
  if (jobsSection && !document.querySelector('.ai-notification')) {
    const container = jobsSection.querySelector('.container');
    const notification = document.createElement('div');
    notification.className = 'ai-notification';
    notification.innerHTML = `
      <div style="background: var(--color-bg-1); border: 1px solid var(--color-primary); border-radius: var(--radius-base); padding: var(--space-16); margin: var(--space-16) 0; position: relative;">
        <div style="display: flex; align-items: center; gap: var(--space-12);">
          <i class="fas fa-robot" style="color: var(--color-primary); font-size: var(--font-size-xl);"></i>
          <div>
            <h4 style="color: var(--color-primary); margin: 0 0 var(--space-4);">${translate('New AI Recommendation')}</h4>
            <p style="margin: 0; font-size: var(--font-size-sm);">We found 3 new jobs matching your profile with 85%+ compatibility!</p>
          </div>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" style="position: absolute; top: var(--space-8); right: var(--space-8); background: none; border: none; color: var(--color-text-secondary); cursor: pointer; font-size: 20px;">&times;</button>
        </div>
      </div>
    `;
    
    if (container && container.children.length > 0) {
      container.insertBefore(notification, container.children[1]);
    }
  }
}

// Online/Offline Status
function checkOnlineStatus() {
  updateOnlineStatus(navigator.onLine);
}

function updateOnlineStatus(isOnline) {
  const offlineIndicator = document.getElementById('offlineIndicator');
  if (offlineIndicator) {
    if (isOnline) {
      offlineIndicator.classList.remove('show');
    } else {
      offlineIndicator.classList.add('show');
    }
  }
}

// User Preferences
function saveUserPreferences() {
  const preferences = {
    language: currentLanguage,
    theme: currentTheme
  };
  console.log('Preferences saved:', preferences);
}

function loadUserPreferences() {
  const currentLangSpan = document.getElementById('currentLang');
  if (currentLangSpan) {
    currentLangSpan.textContent = currentLanguage.toUpperCase();
  }
  
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    if (themeIcon) {
      themeIcon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing Sahay app...');
  initApp();
  
  // Handle initial hash
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (document.getElementById(hash)) {
      navigateToSection(hash);
    }
  }
  
  // Handle hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
      navigateToSection(hash);
    }
  });
});

// Global functions for onclick handlers
window.showJobDetails = showJobDetails;
window.applyToJob = applyToJob;
window.saveJob = saveJob;
window.contactService = contactService;
window.showServiceDetails = showServiceDetails;
window.showLoginModal = showLoginModal;
window.showRegisterModal = showRegisterModal;
window.hideToast = hideToast;