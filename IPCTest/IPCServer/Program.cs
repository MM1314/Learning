using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.Remoting.Channels.Ipc;
using System.Runtime.Remoting.Channels;
using System.Runtime.Remoting;
using IPCInterface;


namespace IPCServer
{
    class Program
    {
        static void Main(string[] args)
        {
            //Instantiate our server channel.
            IpcServerChannel channel = new IpcServerChannel("ServerChannel");
            //Register the server channel.
            ChannelServices.RegisterChannel(channel, false);
            //Register this service type.
            RemotingConfiguration.RegisterWellKnownServiceType(typeof(RemoteObject), "RemoteObject", WellKnownObjectMode.SingleCall);
            Console.WriteLine("press return to exit");
            Console.ReadLine();
        }
    }
}
