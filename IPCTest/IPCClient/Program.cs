using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Runtime.Remoting.Channels;
using System.Runtime.Remoting.Channels.Ipc;
using IPCInterface;

namespace IPCClient
{
    class Program
    {
        static void Main(string[] args)
        {
            //Create an IPC client channel.
            IpcClientChannel channel = new IpcClientChannel();
            //Register the channel with ChannelServices.
            ChannelServices.RegisterChannel(channel, false);
            IRemoteObject obj = (IRemoteObject)Activator.GetObject(typeof(IRemoteObject), "ipc://ServerChannel/RemoteObject");
            if (obj == null)
            {
                Console.WriteLine("could not locate server");
                return;
            }
            for (int i = 1; i < 5; i++)
            {
                Console.WriteLine(obj.Greeting("mmpire"));
            }
            Console.ReadKey();
        }
    }
}
