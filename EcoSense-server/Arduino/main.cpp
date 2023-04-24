#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>
#include "secrets.h"

WiFiClient client;
HTTPClient http;

void setup(){
    Serial.begin(9600);
    delay(2000);
    Serial.print("Connecting to WIFI...");
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.print(".");
  }
    Serial.println("Connected to Wi-Fi");
}
void loop (){
    int AIQ = random(0, 100);
    int CO = random(0, 100);
    int CO2 = random(0, 100);
    int Temp = random(0, 100);
    int Humidity = random(0, 100);

    http.begin(client, serverUrl);
    http.addHeader("Content-Type", "application/json");
    String json = "{\"AQI\": " + String(AIQ) + ", \"CO\": " + String(CO) + ", \"CO2\": " + String(CO2) + ", \"Temp\": " + String(Temp) + ", \"Humidity\": " + String(Humidity) + "}";
    
  int httpResponseCode = http.POST(json);
  String response = http.getString();
  Serial.print("HTTP Response code: ");
  Serial.print(httpResponseCode);
  Serial.println(json);
  http.end();

    delay(60000);
}
