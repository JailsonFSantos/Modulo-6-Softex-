import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;

@WebService
public class SimpleSOAPServer {
   @WebMethod
   public String helloWorld(String name) {
      return "Hello, " + name + "!";
   }
   
   @WebMethod
   public int addNumbers(int a, int b) {
      return a + b;
   }
   
   @WebMethod
   public int subtractNumbers(int a, int b) {
      return a - b;
   }
   
   @WebMethod
   public int multiplyNumbers(int a, int b) {
      return a * b;
   }
   
   public static void main(String[] args) {
      Endpoint.publish("http://localhost:8080/SimpleSOAPServer", new SimpleSOAPServer());
   }
}
