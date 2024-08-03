import {
    Document,
    Image,
    Page,
    StyleSheet,
    View,
    Text,
    PDFViewer,
    Font,
  } from "@react-pdf/renderer";
  
  import {
    Key,
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
    useState,
    useEffect,
  } from "react";
  
  // import axios from "axios"; // Add this line
  import notoSansHindi from "../../assets/fonts/NotoSansDevanagari-Regular.ttf";
  import notoSansHindiBold from "../../assets/fonts/NotoSansDevanagari-Bold.ttf";
  // Import other font weights if needed
  import Qr from '../img/Qr_ima_g.jpeg'
  const FONT_FAMILY = "Noto Sans Hindi";
  Font.register({
    src: notoSansHindi,
    family: FONT_FAMILY,
  });
  Font.register({
    src: notoSansHindiBold,
    family: "Hindi Bold",
  });


  Font.registerHyphenationCallback((word) => [word]);
  // import HindiPdfLayout from './HindiPdfLayout'; // Import Hindi PDF layout component
  
  export const HindiPdfLayout = ({ record }) => {
  
    return (
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page style={styles.page} size="A4">
            <View style={styles.table}>
              <View style={styles.invoicehead}>
                <View style={styles.bodyText}>
                  <View style={styles.row}>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >     
                        <Text>।। श्री गणेशाय नमः।। </Text>
                        
                        <View style={{flexDirection:"column", alignItems:"center"}}>
                        <Text> ।। श्री आईजी प्रसादात् ।। </Text>
                        <Text style={{marginTop:"8px"}}>|| या देवी श्री आईजी सर्व भूतेषु, ज्योति रुपेण संस्थिता । नमस्तस्यै नमस्तस्यै नमस्तस्यै नमोः नमः ||</Text>
                        </View>
                        
                        <Text> ।। श्री कुलदेवताय नमः ।। </Text>
                      </View>
                   </View>
  
                  <View style={styles.secondrow}>
                    <View style={styles.Motherphoto}>
                      {/* <Text>Mother Photo</Text> */}
                      <Image src="/public/img/prof.jpg" />
                    </View>
                    
                    <View style={styles.sirvisa}> 
                    <Text
                      style={{
                        marginRight: "20px",
                        fontSize: "18px",
                        fontFamily: "Hindi Bold",
                        // textDecoration: "underline",
                      }}
                    >
                      श्री सीरवी समाज कर्नाटक ट्रस्ट ( रजि. )
                    </Text>
                    <Text>
                    नं . 116, जे.एम. लेन, बलेपेट - 560 053. फ़ोन : 2287  6090
                    </Text>
                    <Text>
                    +91 90199 05115
                    +91 90199 06116
                    </Text>
                    <Text>
                      E-mail: seervisamajkarnataka@gmail.com
                    </Text>
                    <Text>
                    रजिस्ट्रशेन नं.: DIT (E) BLR/12A/S-2409/AALTS1631E/ITO(E)-3 VIL 2012-2013
                    </Text>
                    </View>
                    
                    
                  </View>
  
                  <View style={styles.row}>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-around",
                          marginLeft:"-60px"
                        }}
                      >     
                        <Text> रसीद सं . .......  </Text>
                        <Text style={{ fontSize: "14px",
                        fontFamily: "Hindi Bold",marginRight:"110px"}}> वार्षिक शुल्क पावती 2024 </Text>
                      </View>
                   </View>
  
                  <View style={[styles.headerDetails]}>
                  <View style={{marginTop:"9px", marginBottom: "15px",display: "flex",gap: "-13px",}}>
                    <Text>
                      {""}{" "}
                      {`                       ${`महेश`}                                        ${`मांगीलाल `}                                  ${`भायल `}`}
                    </Text>
                    <Text>
                      नाम ................................. पिताजी का नाम
                      ....................................... गोत्र
                      ........................................
                    </Text>
                  
                   
                  </View>
                  
                  <View style={{display:"flex", flexDirection:"row"}}>
                  <View style={{marginTop:"9px", marginBottom: "15px",display: "flex",gap: "-13px",marginRight:"40px"}}>
                    <Text> मूलनिवास ........................................</Text>
                  </View>
                  <View style={{marginTop:"9px", marginBottom: "15px",display: "flex",gap: "-13px",}}>
                     {/* <Text>
                      {""}{" "}
                      {`                       ${`महेश`}                                        ${`मांगीलाल `}                                  ${`भायल `}`}
                    </Text> */}
                    <Text>
                       मो नं .................................    ..................................
                    </Text>
                  </View>
                  </View>
  
                  
                  <View style={{marginTop:"9px", marginBottom: "15px",display: "flex",gap: "-13px"}}>
                   <Text>
                      {""}{" "}
                      {`                       ${``}                                        ${` `}                                  ${``}`}
                    </Text>
                    <Text>
                      कार्यालय का पता ...............................................................................................................................................
                    </Text>
                  </View>
                  </View>
                  
                  <View style={{flexDirection:'row', justifyContent:"space-between"}}>
                    <Text>से तीन हजार एक सो रुपये मात्र सधन्यवाद प्राप्त होते </Text>
                    <Text></Text>
                    <Text></Text>
                  </View>
                  
                  <View style={{flexDirection:'row', justifyContent:"space-between"}}>
                  <View style={{height:"21px", width:"50px", border:"1px solid black", justifyContent:"center",alignItems:"center"}}>
                  <Text>3100/-</Text>
                  </View>
                  <Text>ह. दानदाता</Text>
                  <Text>ह. प्राप्तकर्ता</Text>
                  </View>
  
                </View>
                
                <View style={styles.bottomstyle}>
                <View style={styles.underbottom}>
                  <Text>
                    Ac : Shri Seervi Samaj Karnataka Trust
                  </Text>
                  <Text>
                    Bank : Indian Bank 
                  </Text>
                  <Text>
                    Branch : Avenue Road
                  </Text>
                  <Text>
                    Ac : Current Account
                  </Text>
                  <Text>
                    Ac No  :  6001926583
                  </Text>
                  <Text>
                    IFSC Code : IDIB000A038
                  </Text>
                </View> 
  
                <View style={{width:"80px", height:"80px"}}>
                   <Image src={Qr} />
                </View>
                
                </View>
                  
                 
              </View>
             
            </View>
          
          </Page>
        </Document>
      </PDFViewer>
    );
  };
  
  const styles = StyleSheet.create({
    headerDetails: {
      marginTop:"9px",
      marginBottom: "15px",
      display: "flex",
      gap: "-4px",
    },
    sirvisa: {
      marginTop:"5px",
     flexDirection:"column",
     alignItems:"center"
    },
    viewer: {
      paddingTop: 32,
      width: "100%",
      height: "80vh",
      border: "none",
    },
    page: {
      display: "flex",
      padding: "0.4in 0.4in",
      fontSize: 12,
      color: "#333",
      backgroundColor: "#fff",
      fontFamily: FONT_FAMILY,
    },
    head: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "20%",
    },
    headElement: {},
  
    invoiceTextNumberContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    invoiceText: {
      color: "#3aabf0",
    },
     
    dividerSM: {
      width: "100%",
      height: 1,
      marginTop: 12,
      marginBottom: 12,
      backgroundColor: "#e5e5e5",
    },
    dividerLG: {
      width: "100%",
      height: 1,
      marginTop: 40,
      marginBottom: 40,
      backgroundColor: "#e5e5e5",
    },
    table: {
      paddingBottom: "70px",
    },
    row: {
      // flexDirection: "row",
      // alignItems: "center",
      // justifyContent: "space-between",
      // marginBottom: "2px",
    },
    secondrow: {
      display: "flex",
      flexDirection: "row",
      justifyContent:"space-around",
      alignItems: "center",
      marginBottom: "20px",
      marginLeft: "10px",
      marginRight: "20px",
    },
    Fatherphoto: {
      width: "80px",
      height: "80px",
      border: "2px solid black",
      marginRight: "12px",
    },
    Motherphoto: {
      width: "80px",
      height: "80px",
      border: "2px solid black",
    },
    bottomstyle: {
      padding: "10px",
      borderTop: "none",
      border: "2px solid black",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between"
    },
    underbottom:{
      marginLeft:"90px",
      flexDirection:"column"
    },
    kalushimg: {
      width: 30,
      height: 30,
      // marginTop:"-25px",
      marginLeft: "12px",
      marginRight: "12px",
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: "5px",
    },
  
    bodyText: {
      padding: "10px",
      border: "2px solid black",
      borderBottom: "none",
      paddingBottom: "4px",
    },
    textlastpage: {
      margin: "6px",
    },
  });
  