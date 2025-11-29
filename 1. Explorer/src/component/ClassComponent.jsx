import React from "react";

class ClassCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("🔵 componentDidMount — Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("🟡 componentDidUpdate — Component updated");
    console.log("Previous Count:", prevState.count);
    console.log("Current Count:", this.state.count);
  }

  componentWillUnmount() {
    console.log("🔴 componentWillUnmount — Component will unmount");
  }

  decreament = () => {
    this.setState({ count: this.state.count - 1 });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 w-full max-w-md overflow-hidden">
        {/* Header Section */}
        <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex justify-between items-center">
            <div>
                <h3 className="text-lg font-bold text-slate-800">Class Counter</h3>
                <p className="text-xs text-slate-400 font-mono mt-1">extends React.Component</p>
            </div>
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="p-10 flex flex-col items-center">
            {/* Display */}
            <div className="mb-10 text-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Current Value</span>
                <h2 className="text-7xl font-black text-slate-900 mt-2 tracking-tighter">
                    {this.state.count}
                </h2>
            </div>

            {/* Controls */}
            <div className="flex w-full gap-4">
                <button 
                    onClick={this.decreament}
                    className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-all active:scale-95"
                >
                    Decrease
                </button>
                <button 
                    onClick={this.increment}
                    className="flex-1 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-slate-300 active:scale-95"
                >
                    Increase
                </button>
            </div>

            {/* Footer Hint */}
            <div className="mt-8 pt-6 border-t border-slate-50 w-full text-center">
                <p className="text-xs text-slate-400">
                    Open console to view <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">componentDidUpdate</code> logs
                </p>
            </div>
        </div>
      </div>
    );
  }
}

export default ClassCounter;