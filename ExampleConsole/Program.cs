// See https://aka.ms/new-console-template for more information
using System;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Linq;


Console.WriteLine("Hello, World!");
System.Console.WriteLine(MorseCodeDecoder.DecodeBits("101010001110111"));

public class MorseCodeDecoder
{
    public static string DecodeBits(string bits)
    {
       string newStr = "";
      string[]slowa = bits.Split(new[] {"00000000000000"}, StringSplitOptions.None);
      List<string> lates = new List<string>();
      string[] laters = new string[] {};
      for(int i = 0; i<slowa.Length;i++){
        {
          laters=slowa[i].Split(new[] {"000000"}, StringSplitOptions.None);
          for(int j = 0; j<laters.Length;j++){
            lates.Add(laters[j]);
          }
          lates.Add("Space");
        }
      }
      lates.RemoveAt(lates.Count-1);
      List<string> symbols = new List<string>();
      foreach(string i in lates)
      {
        for(int j=0; j<i.Split(new[] {"00"},StringSplitOptions.None).Length; j++){
          symbols.Add(i.Split(new[]{"00"}, StringSplitOptions.None)[j].ToString());
        }
        symbols.Add(" ");
      }
      foreach(string item in symbols){
        switch (item){
            case "111111" : newStr+="-"; break;
            case "11" : newStr+=".";break;
            case " ": newStr +=" "; break;
            case "Space": newStr+="   "; break;
            default: newStr+="."; break;
        }
      }
      DecodeMorse(newStr);
      return newStr;
    }

    public static string DecodeMorse(string morseCode)
    {
      string newStr = "";
      string[] slowa = morseCode.Split(new string[]{"   "}, StringSplitOptions.None);
        
      for(int i=0; i<slowa.Length;i++){
      string[] bukva = slowa[i].Split(' ');
        
        for(int j=0; j<bukva.Length;j++){
          switch(bukva[j])
            {
              case ".-": newStr += "A"; break;
              case "-...": newStr +="B"; break;
              case "-.-." : newStr +="C";break;
              case "-..": newStr+="D";break;
              case ".": newStr+="E";break;
              case "..-.": newStr+="F";break;
              case "--." : newStr+="G";break;
              case "....": newStr+="H";break;
              case "..": newStr += "I";break;
              case ".---" : newStr+="J";break;
              case "-.-" : newStr+="K";break;
              case ".-.." : newStr+="L";break;
              case "--" : newStr+="M";break;
              case "-.": newStr+="N";break;
              case "---": newStr+="O";break;
              case ".--.": newStr+="P";break;
              case "--.-": newStr+="Q";break;
              case ".-." : newStr+="R";break;
              case "..." : newStr+="S";break;
              case "-": newStr+="T";break;
              case "..-": newStr+="U";break;
              case "...-": newStr+= "V";break;
              case ".--": newStr+="W";break;
              case "-..-": newStr += "X";break;
              case "-.--": newStr+="Y";break;
              case "--..": newStr+="Z";break;
          }
        }
        if(newStr!="" && i != slowa.Length-1){newStr+= " ";}
      }
      if (slowa.Length > 9){newStr+=".";}
           return newStr;
    }
}