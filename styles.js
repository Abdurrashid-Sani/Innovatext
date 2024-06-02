import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  post: {
    borderWidth: 1.2,
    borderColor: '#dfe4ea',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  postHeader: {
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  postHeaderText: {
    flex: 1,
    paddingHorizontal: 10,
  },
  userName: {
    fontSize: 18,
  },
  userLocation: {
    fontSize: 14,
    color: '#666',
  },
  moreIcon: {
    paddingHorizontal: 6,
  },
  postContent: {
    paddingHorizontal: 6,
  },
  postText: {
    fontSize: 16,
    marginVertical: 10,
  },
  postContentImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  interactionBar: {
    backgroundColor: '#fafafa',
    height: 40,
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  interactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactionText: {
    color: '#000',
    marginLeft: 4,
  },
  interactionButtons: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 4,
  },
  interactionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  interactionButtonText: {
    marginLeft: 6,
  },
  searchHeader: {
    paddingHorizontal: 10,
  },
  searchBar1:{
    height: 40,
    backgroundColor: '#f1f3f6',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#f1f3f6',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  searchIcon: {
    paddingRight: 10,
  },
  storiesView: {
    marginTop: 10,
  },
  storiesTitle: {
    fontSize: 30,
    paddingHorizontal: 10,
  },
  storiesScroll: {
    marginTop: 10,
    paddingLeft: 10,
  },
  storyAdd: {
    paddingRight: 6,
    position: 'relative',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  storyAddIcon: {
    position: 'absolute',
    right: 5,
    bottom: -2,
  },
  story: {
    marginLeft: 10,
    marginRight: 10,
  },
  posts: {
    paddingHorizontal: 10,
  },
  pageTitle: {
    color: '#000',
    paddingHorizontal: 10,
    fontSize: 30,
  },
  categoriesContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  categoryCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#dfe4ea',
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 18,
  },
  newMessageDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  notificationBadge: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  notificationBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  // New styles for Notifications screen
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#FFA500',
    borderRadius: 20,
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  markAllButton: {
    alignSelf: 'flex-end',
    padding: 10,
    marginRight: 10,
  },
  markAllButtonText: {
    color: '#FFA500',
    fontSize: 16,
  },
  unreadNotification: {
    backgroundColor: '#f0f0f0',
  },
  readNotification: {
    backgroundColor: '#fff',
  },
  notification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4ea',
  },
  notificationText: {
    fontSize: 16,
    color: '#000',
  },
  settingsContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#dfe4ea',
  },
  settingsTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingText: {
    fontSize: 16,
  },
  createPostContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  mediaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  mediaPreviewContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  mediaPreview: {
    width: '100%',
    height: 200,
  },
  removeMediaButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    borderRadius: 5,
  },
  removeMediaText: {
    color: '#fff',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  searchBar: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  featuredContainer: {
    paddingHorizontal: 20,
  },
  featuredCard: {
    marginRight: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuredCategory: {
    fontSize: 14,
    color: '#666',
  },
  featuredDuration: {
    fontSize: 14,
    color: '#666',
  },
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  categoryText: {
    fontSize: 18,
  },
  notificationsContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  notificationText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  recommendedContainer: {
    paddingHorizontal: 20,
  },
});
