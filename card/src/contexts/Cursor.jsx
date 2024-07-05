// CursorContext.js
import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [showCursor, setShowCursor] = useState(false);

  return (
    <CursorContext.Provider value={{ showCursor, setShowCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
