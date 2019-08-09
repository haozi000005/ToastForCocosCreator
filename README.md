IDE version:v2.0.9
## Description
This toast is inspired by [CocosCreator-Toast](https://github.com/jtly1985/CocosCreator-Toast),which is written in js.

Here i have rewrited it in ts,for ts has become more and more used in CocosCreator.

## Usage
Downlod the two ts files into your project,then you can make a toast just by one line code: ``Toast.ShowText("hello,i am jack");``.

Function ``ShowText`` have two default arguments,you can specific how long will the toast be shown and where the toast locationed.

Maybe you have noticed b4 folder,if you builded web、wechat or other type projects you should put it under directory:**res/import**。Otherwise ,when it tries to get toast bg texture,it caused 404 error。But all works fine in CocosCreator editor enviroment and localhost browser situation.

Also i have made a ``build-templates`` folder which contains b4 folder.You can put this template folder under you project(the same directory of assets),then while you build your project,all files under the template will be copied to directory of ``build``.

If you want get more message about it,you can read the source code.

Any troubles if you got,let me know.