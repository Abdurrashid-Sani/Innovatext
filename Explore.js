import React, { useState } from 'react';
import {
  View, Text,
  StyleSheet, TouchableOpacity, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Courses = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'WebDevelopment':
        return <WebDevelopmentSection />;
      case 'MobileDevelopment':
        return <MobileDevelopmentSection />;
      case 'DataScience':
        return <DataScienceSection />;
      case 'MachineLearning':
        return <MachineLearningSection />;
      case 'Cybersecurity':
        return <CybersecuritySection />;
      case 'CloudComputing':
        return <CloudComputingSection />;
      case 'Blockchain':
        return <BlockchainSection />;
      case 'ArtificialIntelligence':
        return <ArtificialIntelligenceSection />;
      case 'IoT':
        return <IoTSection />;
      case 'DevOps':
        return <DevOpsSection />;
      case 'Marketing':
        return <MarketingSection />;
      case 'Finance':
        return <FinanceSection />;
      case 'Operations':
        return <OperationsSection />;
      case 'HumanResources':
        return <HumanResourcesSection />;
      case 'Strategy':
        return <StrategySection />;
      case 'Sales':
        return <SalesSection />;
      case 'CustomerService':
        return <CustomerServiceSection />;
      case 'Innovation':
        return <InnovationSection />;
      case 'BusinessPlanning':
        return <BusinessPlanningSection />;
      case 'MarketResearch':
        return <MarketResearchSection />;
      case 'LegalStructures':
        return <LegalStructuresSection />;
      case 'Funding':
        return <FundingSection />;
      case 'GrowthStrategies':
        return <GrowthStrategiesSection />;
      case 'ExitStrategies':
        return <ExitStrategiesSection />;
      default:
        return <HomeSection />;
    }
  };

  const renderBackButton = () => (
    <TouchableOpacity onPress={() => setActiveSection('Home')} style={styles.backButton}>
      <Icon name="arrow-back" size={30} color="#FFFFFF" />
      <Text style={styles.backButtonText}>Back to Home</Text>
    </TouchableOpacity>
  );

  const HomeSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Available Progrommes</Text>
      </View>
      <ScrollView contentContainerStyle={styles.featuresContainer}>
        <PressableFeatureBox name="Web Development" icon="code-slash" onPress={() => setActiveSection('WebDevelopment')} />
        <PressableFeatureBox name="Mobile Development" icon="phone-portrait" onPress={() => setActiveSection('MobileDevelopment')} />
        <PressableFeatureBox name="Data Science" icon="analytics" onPress={() => setActiveSection('DataScience')} />
        <PressableFeatureBox name="Machine Learning" icon="bulb" onPress={() => setActiveSection('MachineLearning')} />
        <PressableFeatureBox name="Cybersecurity" icon="shield-checkmark" onPress={() => setActiveSection('Cybersecurity')} />
        <PressableFeatureBox name="Cloud Computing" icon="cloud" onPress={() => setActiveSection('CloudComputing')} />
        <PressableFeatureBox name="Blockchain" icon="cube" onPress={() => setActiveSection('Blockchain')} />
        <PressableFeatureBox name="Artificial Intelligence" icon="hardware-chip" onPress={() => setActiveSection('ArtificialIntelligence')} />
        <PressableFeatureBox name="Internet of Things (IoT)" icon="wifi" onPress={() => setActiveSection('IoT')} />
        <PressableFeatureBox name="DevOps" icon="construct" onPress={() => setActiveSection('DevOps')} />
        <PressableFeatureBox name="Marketing" icon="megaphone" onPress={() => setActiveSection('Marketing')} />
        <PressableFeatureBox name="Finance" icon="cash" onPress={() => setActiveSection('Finance')} />
        <PressableFeatureBox name="Operations" icon="cog" onPress={() => setActiveSection('Operations')} />
        <PressableFeatureBox name="Human Resources" icon="people" onPress={() => setActiveSection('HumanResources')} />
        <PressableFeatureBox name="Strategy" icon="compass" onPress={() => setActiveSection('Strategy')} />
        <PressableFeatureBox name="Sales" icon="cart" onPress={() => setActiveSection('Sales')} />
        <PressableFeatureBox name="Customer Service" icon="headset" onPress={() => setActiveSection('CustomerService')} />
        <PressableFeatureBox name="Innovation" icon="rocket" onPress={() => setActiveSection('Innovation')} />
        <PressableFeatureBox name="Business Planning" icon="business" onPress={() => setActiveSection('BusinessPlanning')} />
        <PressableFeatureBox name="Market Research" icon="search" onPress={() => setActiveSection('MarketResearch')} />
        <PressableFeatureBox name="Legal Structures" icon="document" onPress={() => setActiveSection('LegalStructures')} />
        <PressableFeatureBox name="Funding" icon="cash" onPress={() => setActiveSection('Funding')} />
        <PressableFeatureBox name="Growth Strategies" icon="trending-up" onPress={() => setActiveSection('GrowthStrategies')} />
        <PressableFeatureBox name="Exit Strategies" icon="exit" onPress={() => setActiveSection('ExitStrategies')} />
      </ScrollView>
    </View>
  );

  const PressableFeatureBox = ({ name, icon, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.featureBox}>
      <Icon name={icon} size={50} color="#FFA500" />
      <Text style={styles.featureName}>{name}</Text>
    </TouchableOpacity>
  );

  const WebDevelopmentSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Web Development Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Web Development Content Goes Here</Text>
      </View>
    </View>
  );

  const MobileDevelopmentSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Mobile Development Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Mobile Development Content Goes Here</Text>
      </View>
    </View>
  );

  const DataScienceSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Data Science Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Data Science Content Goes Here</Text>
      </View>
    </View>
  );

  const MachineLearningSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Machine Learning Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Machine Learning Content Goes Here</Text>
      </View>
    </View>
  );

  const CybersecuritySection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Cybersecurity Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Cybersecurity Content Goes Here</Text>
      </View>
    </View>
  );

  const CloudComputingSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Cloud Computing Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Cloud Computing Content Goes Here</Text>
      </View>
    </View>
  );

  const BlockchainSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Blockchain Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Blockchain Content Goes Here</Text>
      </View>
    </View>
  );

  const ArtificialIntelligenceSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Artificial Intelligence Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Artificial Intelligence Content Goes Here</Text>
      </View>
    </View>
  );

  const IoTSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Internet of Things (IoT) Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>IoT Content Goes Here</Text>
      </View>
    </View>
  );

  const DevOpsSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>DevOps Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>DevOps Content Goes Here</Text>
      </View>
    </View>
  );

  const MarketingSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Marketing Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Marketing Content Goes Here</Text>
      </View>
    </View>
  );

  const FinanceSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Finance Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Finance Content Goes Here</Text>
      </View>
    </View>
  );

  const OperationsSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Operations Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Operations Content Goes Here</Text>
      </View>
    </View>
  );

  const HumanResourcesSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Human Resources Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Human Resources Content Goes Here</Text>
      </View>
    </View>
  );

  const StrategySection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Strategy Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Strategy Content Goes Here</Text>
      </View>
    </View>
  );

  const SalesSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Sales Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Sales Content Goes Here</Text>
      </View>
    </View>
  );

  const CustomerServiceSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Customer Service Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Customer Service Content Goes Here</Text>
      </View>
    </View>
  );

  const InnovationSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Innovation Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Innovation Content Goes Here</Text>
      </View>
    </View>
  );

  const BusinessPlanningSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Business Planning Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Business Planning Content Goes Here</Text>
      </View>
    </View>
  );

  const MarketResearchSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Market Research Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Market Research Content Goes Here</Text>
      </View>
    </View>
  );

  const LegalStructuresSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Legal Structures Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Legal Structures Content Goes Here</Text>
      </View>
    </View>
  );

  const FundingSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Funding Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Funding Content Goes Here</Text>
      </View>
    </View>
  );

  const GrowthStrategiesSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Growth Strategies Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Growth Strategies Content Goes Here</Text>
      </View>
    </View>
  );

  const ExitStrategiesSection = () => (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {renderBackButton()}
        <Text style={styles.headerTitle}>Exit Strategies Section</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Exit Strategies Content Goes Here</Text>
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    headerContainer: {
      backgroundColor: '#0C065AF8',
      padding: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      elevation: 5,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFA500',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    featuresContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      paddingVertical: 20,
    },
    featureBox: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '45%',
      aspectRatio: 1,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      marginVertical: 10,
      elevation: 5,
    },
    featureName: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#555',
      textAlign: 'center',
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButtonText: {
      color: '#FFA500',
      fontSize: 16,
      marginLeft: 10,
    },
    contentContainer: {
      flex: 1,
      padding: 20,
      backgroundColor: '#1A1A1A',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginTop: -20,
    },
    contentText: {
      fontSize: 16,
      marginBottom: 10,
      color: '#FFFFFF',
    },
  });

  return (
    <View style={styles.container}>
      {renderSection()}
    </View>
  );
};

export default Courses;
