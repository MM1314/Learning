using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace IPCInterface
{
    public class RemoteObject : MarshalByRefObject, IRemoteObject
    {
        public RemoteObject()
        {
            Console.WriteLine("Constructor called");
        }
        public string Greeting(string name)
        {
            Console.WriteLine("Greeting called");
            return "Hello," + name;
        }
    }
}
