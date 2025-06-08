'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

// SVG icons
const LocationIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
    />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    fill="currentColor" 
    {...props}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const MessageIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
    />
  </svg>
);

const ChevronDownIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    {...props}
  >
    <path 
      fillRule="evenodd" 
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
      clipRule="evenodd" 
    />
  </svg>
);

export default function LocationSharing({ isMobile, iconOnly, compactDesktop }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualAddress, setManualAddress] = useState('');
  const dropdownRef = useRef(null);
  const errorTimeoutRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowManualInput(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Clear error after 7 seconds
  useEffect(() => {
    if (error) {
      errorTimeoutRef.current = setTimeout(() => {
        setError(null);
      }, 7000);
    }
    
    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
    };
  }, [error]);

  const isSecureContext = () => {
    return window.location.protocol === 'https:' || 
           window.location.hostname === 'localhost' || 
           window.location.hostname === '127.0.0.1';
  };

  const getLocation = () => {
    setLoading(true);
    setError(null);
    setShowManualInput(false);

    if (!navigator.geolocation) {
      setError(t['location.notSupported']);
      setShowManualInput(true);
      setLoading(false);
      return;
    }

    // Check if running in a secure context
    if (!isSecureContext()) {
      setError(t['location.secureOriginRequired']);
      setShowManualInput(true);
      setLoading(false);
      return;
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 30000, // Increased from 5000 to 30000 (30 seconds) for better mobile performance
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLoading(false);
      },
      (err) => {
        console.error(`ERROR(${err.code}): ${err.message}`);
        // Handle specific geolocation errors
        if (err.code === 1) {
          setError(t['location.permissionDenied']);
        } else if (err.code === 2) {
          setError(t['location.positionUnavailable']);
        } else if (err.code === 3) {
          setError(t['location.timeout']);
        } else if (err.message && err.message.includes('Only secure origins')) {
          setError(t['location.secureOriginRequired']);
        } else {
          setError(t['location.error']);
        }
        setShowManualInput(true);
        setLoading(false);
      },
      options
    );
  };

  const handleManualShare = (e) => {
    e.preventDefault();
    if (!manualAddress.trim()) return;
    
    const encodedAddress = encodeURIComponent(manualAddress);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    
    // Use the address as the location
    setLocation({ address: manualAddress, url: googleMapsUrl });
    setShowManualInput(false);
  };

  const shareLocationViaWhatsApp = () => {
    if (!location) {
      getLocation();
      return;
    }

    let shareUrl;
    if (location.address) {
      // Using manual address
      shareUrl = location.url;
    } else {
      // Using coordinates
      const { latitude, longitude } = location;
      shareUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    }

    const whatsappMessage = `${t['location.emergencyMessage']}: ${shareUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setShowDropdown(false);
  };

  const shareLocationViaWebShare = () => {
    if (!location) {
      getLocation();
      return;
    }

    let shareUrl;
    if (location.address) {
      // Using manual address
      shareUrl = location.url;
    } else {
      // Using coordinates
      const { latitude, longitude } = location;
      shareUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    }
    
    if (navigator.share) {
      navigator.share({
        title: t['location.shareTitle'],
        text: `${t['location.emergencyMessage']}: `,
        url: shareUrl
      })
      .then(() => console.log('Share successful'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      window.open(shareUrl, '_blank');
    }
    setShowDropdown(false);
  };

  // Function to handle disabled share button clicks
  const handleDisabledClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Don't show error if already loading
    if (loading) return;
    
    // Show a message to get location first
    setError(t['location.getLocationFirst']);
    
    // Clear error after 3 seconds
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  // Button content based on props
  const buttonContent = () => {
    if (iconOnly) {
      return (
        <span className="location-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </span>
      );
    }

    if (compactDesktop) {
      return (
        <>
          <span className="location-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </span>
          <span className="hidden xl:inline-block ml-1">{t['location.shareLocation']}</span>
        </>
      );
    }

    if (isMobile) {
      return t['location.shareLocation'];
    }

    return (
      <>
        <span className="location-icon mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </span>
        {t['location.shareLocation']}
      </>
    );
  };

  if (isMobile) {
    return (
      <div className="relative">
        {!location && (
          <div className="mobile-share-reminder">
            {t['location.getLocationFirst']}
          </div>
        )}
        <button 
          className="mobile-share-location-btn"
          onClick={getLocation}
        >
          {buttonContent()}
          {loading && <span className="ml-2 spinner"></span>}
        </button>
        
        {showManualInput && (
          <div className="location-dropdown manual-input-dropdown p-3" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleManualShare} className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {t['location.enterAddress']}
              </label>
              <input
                type="text"
                value={manualAddress}
                onChange={(e) => setManualAddress(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm"
                placeholder={t['location.addressPlaceholder']}
              />
              <button 
                type="submit" 
                className="w-full px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
              >
                {t['location.share']}
              </button>
            </form>
          </div>
        )}
        
        {error && <div className="location-error">{error}</div>}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className={`share-location-btn ${iconOnly ? 'icon-only-btn' : ''}`}
        onClick={() => setShowDropdown(!showDropdown)}
        aria-haspopup="true"
        aria-expanded={showDropdown}
      >
        {buttonContent()}
      </button>

      {showDropdown && (
        <div className="location-dropdown">
          <button 
            className="dropdown-item" 
            onClick={getLocation}
            disabled={loading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            {t['location.getLocation']}
            {loading && <span className="ml-2 spinner"></span>}
          </button>
          
          <button 
            className="dropdown-item disabled-share-option"
            onClick={location ? shareLocationViaWhatsApp : handleDisabledClick}
            data-disabled={!location ? "true" : "false"}
            style={{
              color: !location ? 'rgb(156, 163, 175)' : '',
              cursor: !location ? 'not-allowed' : 'pointer'
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 16 16" 
              className="w-5 h-5 mr-2"
              style={{ color: !location ? 'rgb(156, 163, 175)' : '' }}
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            {t['location.shareWhatsApp']}
          </button>
          
          <button 
            className="dropdown-item disabled-share-option"
            onClick={location ? shareLocationViaWebShare : handleDisabledClick}
            data-disabled={!location ? "true" : "false"}
            style={{
              color: !location ? 'rgb(156, 163, 175)' : '',
              cursor: !location ? 'not-allowed' : 'pointer'
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-5 h-5 mr-2"
              style={{ color: !location ? 'rgb(156, 163, 175)' : '' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Z" />
            </svg>
            {t['location.shareOther']}
          </button>
          
          <div className="dropdown-divider"></div>
          
          <div className="dropdown-item cursor-pointer" onClick={() => setShowManualInput(!showManualInput)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            {t['location.manualLocation']}
          </div>
        </div>
      )}
      
      {showManualInput && (
        <div className="location-dropdown manual-input-dropdown p-3" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={handleManualShare} className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t['location.enterAddress']}
            </label>
            <input
              type="text"
              value={manualAddress}
              onChange={(e) => setManualAddress(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm"
              placeholder={t['location.addressPlaceholder']}
            />
            <button 
              type="submit" 
              className="w-full px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
            >
              {t['location.share']}
            </button>
          </form>
        </div>
      )}
      
      {error && <div className="location-error">{error}</div>}
    </div>
  );
} 