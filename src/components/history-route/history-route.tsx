import { useState, useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';
import type { BrowserHistory, MemoryHistory } from 'history';

export interface HistoryRouterProps {
  history: BrowserHistory | MemoryHistory;
  basename?: string;
  children?: React.ReactNode;
}

function HistoryRouter({ basename, children, history }: HistoryRouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => {
    const unlisten = history.listen((update) => setState(update));
    return unlisten;
  }, [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default HistoryRouter;
