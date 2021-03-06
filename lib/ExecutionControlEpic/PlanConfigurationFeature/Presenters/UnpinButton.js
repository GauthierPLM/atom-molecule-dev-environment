"use babel";
// @flow

import * as React from "react";

export default class UnpinButton extends React.Component<Props, State> {
  state: State;
  props: Props;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="btn icon icon-remove-close"
      />
    );
  }
}

UnpinButton.defaultProps = {};

type DefaultProps = {};

type Props = {
  onClick(): void,
};

type State = {};
