data=struct('title','data stream 1','stream',11111111111,'image','drake.jpg');
data(2)=struct('title','data stream 2','stream',22222222222,'image','drake.jpg');
data(3)=struct('title','data stream 3','stream',33333333333,'image','drake.jpg');
data(4)=struct('title','data stream 4','stream',44444444444,'image','drake.jpg');
data(5)=struct('title','data stream 5','stream',55555555555,'image','drake.jpg');
savejson('info',data,'C:\Users\asmith\Desktop\datasite\dataStream.json')
