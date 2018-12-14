# chrome-sidebar-demo

This was for DaNiu tech group.

___

### usage
```
yarn 
```

Then, load extension from this folder.

___

### current problems

After chrome get updated, you can't use sidebar API anymore (but for firefox, you still can use it (https://github.com/mdn/webextensions-examples/tree/master/theme-integrated-sidebar

Then the only way for this feature to work becomes how to inject html codes into every website you are visiting.

But don't be happy too earler, google has setted up a new rule for preveding you to do this: `Content Security Policy`, it seems disabled all my `onClick` boundings in react component.

So before I figure it out how to solve this problem, you can still have a look at [NativeJavascript branch](https://github.com/yingshaoxo/chrome-sidebar-demo/tree/native_javascript) of this repo (it works as expected.

Thank you for the reading.
