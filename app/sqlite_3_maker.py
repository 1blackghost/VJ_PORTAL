import sqlite3
conn=sqlite3.connect("prime.db")
c=conn.cursor()

c.execute("""CREATE TABLE prime (user text,message text,m_id text,likes text,time text,profile text)""")
conn.commit()

'''

c.execute("""SELECT * FROM prime""")
msg=c.fetchall()
print(msg)
'''
