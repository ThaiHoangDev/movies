import { Component, ErrorInfo, ReactNode } from 'react';
import { ResourceError } from './components/resource-error';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo, 'Error logging');
  }

  handleRefresh = () => {
    console.log('Error logging false');
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      console.log('Error logging false');
      return (
        <ResourceError
          onRefetch={this.handleRefresh}
          error='Sorry, something unexpected happened'
        />
      );
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
