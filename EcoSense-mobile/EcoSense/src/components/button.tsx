import * as React from "react";
import { Button } from "react-native-elements";

export default () => {
    return (
      <Button
        buttonStyle={{ width: 150 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F"
        }}
        disabledTitleStyle={{ color: "#00F" }}
        loadingProps={{ animating: true }}
        loadingStyle={{}}
        onPress={() => alert("click")}
        title="Log in"
        titleProps={{}}
        titleStyle={{ marginHorizontal: 5 }}
      />
    );
  }