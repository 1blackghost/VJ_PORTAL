from datetime import datetime
import pytz
  
UTC = pytz.utc
  

IST = pytz.timezone('Asia/Kolkata')
  
datetime_ist = datetime.now(IST)
print("Date & Time in IST : ", 
      datetime_ist.strftime('%Y:%m:%d %H:%M:%S %Z %z'))