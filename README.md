
- git status 【查看当前库状态】
- git diff xxx.txt 【工作区和暂存区的比较】
- git diff --cached xxx.txt 【暂存区和分支的比较】
- git log (--pretty=oneline) 【查看历史记录】
- git reset --hard HEAD^ 【回退到上一个版本(一个^表示回退上一次,^^表示回退上两次，以次类推)】
- git reflog 【记录每一次命令】
- git reset --hard 版本号 【回退到某个指定版本】
- cat xxx.txt 【查看文件内容】
- git reset HEAD xxx.txt 【如果不小心add到了暂存区可用此命令回退到工作区】
- git checkout -- xxx.txt 【上面回退到工作区后可用此命令把工作区里的修改全部撤销】
- git rm xxx.txt 【删除版本库里的文件】
- git checkout -- xxx.txt 【如果工作区误删了文件可用此命令从版本库里获取】
- git remote add origin git@xxx.git 【关于一个远程库】
- git push -u origin master 【第一次推送要加上u,推送master分支的所有内容到origin远程库上】
- git branch --all【查看所有分支】
  master【本地默认主分支】 origin/master【远程主分支】 origin/dev【远程开发分支】
  新克隆下来的代码默认master和origin/master是关联的，也是就他们的代码保持同步
  但是origin/dev分支在本地没有任何关联
- git checkout dev origin/dev 【创建本地分支dev,并和远程origin/dev分支关联】
- git checkout dev 【切换分支(dev分支)进行开发】
- git checkout -b dev 【创建本地分支】
- git push origin dev:dev 【发布dev分支同步到远程仓库会新建一个dev分支】
- git checkout dev、git checkout master、git merge dev
  【顺序是先切换到dev分支,再切换到master分支,把dev分支和master分支进行合并】
- git push origin:dev 【删除远程分支】
- git branch -d dev 【删除本地dev分支，不能在当前分支去删除当前分支】

```
昨天再现
前天再现
```

我的天
昨天天天空在尖