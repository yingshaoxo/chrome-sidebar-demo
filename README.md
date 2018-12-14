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

Then the only way for this feature becomes how to inject html codes into every website you are visiting.

But don't feel happy too earler, google have setted a new rule for preveding you do this: `Content Security Policy`, it seems disabled all my `onClick` boundings for react component.

Before I figure it out how to solve this problem, you can have a look at `NativeJavascript` branch of this repo.

Thank you for reading.
