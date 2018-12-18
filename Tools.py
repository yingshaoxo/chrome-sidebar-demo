#!/usr/bin/env /usr/bin/python3
 
#!/usr/bin/env /usr/bin/python3
from auto_everything.base import Python, Terminal
py = Python()
t = Terminal()

class Tools():
    def clear(self):
        t.run("""
        rm *.map
        rm *.js
        rm *.css
        rm index.html
        """)

    def push(self, comment):
        self.clear()
        t.run('git add .')
        t.run('git commit -m "{}"'.format(comment))
        t.run('git push origin')

    def pull(self):
        t.run("""
git fetch --all
git reset --hard origin/master
""")

    def reset(self):
        t.run("""
git reset --hard HEAD^
""")

py.make_it_runnable()
py.fire(Tools)
