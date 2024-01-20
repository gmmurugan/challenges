interface Calculation{
 int operate(int a, int b);
 String operate(String a, String b);
}
interface Contatenation {
 String operate(String a, String b);
}

public class FunctionalInterface {
 public static void main(String[] args) {
  Calculation add = (a, b) -> {
   int result = a + b;
   return result; };
   
   //
   //Calculation
   Contatenation concat = (c, d) -> {
       String result = c + " " + d;
       return result;
   };
int sum = add.operate(5, 3);
String concatString = concat.operate("Hi", "Hello");

System.out.println(sum);
System.out.println(concatString);

}
}