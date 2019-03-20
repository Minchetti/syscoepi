<?php
/**
 * Defines functions used in theme.
 *
 * @package       Tube Ace
 * @subpackage    Play
 * @since         Play 1.0
 * @link          http://tubeace.com
 */

require get_template_directory() . '/inc/customizer/customizer-defaults.php';

if(!isset($content_width)) $content_width = 900;

/* setup */
function tubeaceplay_setup() { 

  /* theme support */
  // load theme text domain
  load_theme_textdomain('tubeaceplay', get_template_directory() . '/languages' );

  // RSS feed links
  add_theme_support('automatic-feed-links');

  // custom background
  add_theme_support('custom-background', array('default-color' => '000000') ); // background_color

  // custom header
  add_theme_support('custom-header', array('width' => 1190, 'height' => 100, 'flex-width' => true, 'flex-height' => true) );

  // post thumbnails
  add_theme_support('post-thumbnails');

  // title tag
  add_theme_support('title-tag');

  // logo
  add_theme_support('custom-logo', array('height' => 50, 'width' => 250, 'flex-width' => true, 'flex-height' => true));

  // woocommerce support
  add_theme_support('woocommerce');

  // post formats
  add_theme_support( 'post-formats', array( 'video', 'gallery', 'image' ) );

  // register menu
  register_nav_menus(
    array(
      'header-menu' => __('Header Menu', 'tubeaceplay')
    )
  );

  // editor styles
  add_editor_style('css/editor-style.css');

  // html5
  add_theme_support( 'html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption') );  

}
add_action('after_setup_theme', 'tubeaceplay_setup');

function tubeaceplay_error_notice() {

  if( !is_plugin_active('tubeace/tubeace.php') ){
    ?>
    <div class="error notice">
        <p><?php _e( 'The <a href="https://tubeace.com" target="_blank">Tube Ace Plugin</a> is not activated. Make sure it is installed and activated in the <a href="plugins.php">Plugins</a> section.', 'tubeaceplay' ); ?></p>
    </div>
  <?php }
}
add_action( 'admin_notices', 'tubeaceplay_error_notice' );

/* register sidebars */
function tubeaceplay_widgets_init() {

  global $tubeaceplay_defaults;

  register_sidebar(array(
    'name' => __('Sidebar Left', 'tubeaceplay'),
    'id' => 'sidebar-1',
    'description' => __('Sidebar Left', 'tubeaceplay'),
    'before_widget' => '<div id="%1$s" class="%2$s">',
    'after_widget' => '</div>',
    'before_title' => '<h3 class="sidebar-left-widget-title">',
    'after_title' => '</h3>',
  ));
  register_sidebar(array(
    'name' => __('Sidebar Right', 'tubeaceplay'),
    'id' => 'sidebar-2',
    'description' => __('Sidebar Right', 'tubeaceplay'),
    'before_widget' => '<div id="%1$s" class="%2$s">',
    'after_widget' => '</div>',
    'before_title' => '<h3 class="sidebar-right-widget-title">',
    'after_title' => '</h3>',
  ));
  register_sidebar( array(
    'name' => __('Header Widget Area', 'tubeaceplay'),
    'id' => 'header-1',
    'description' => __('Appears in Header', 'tubeaceplay'),
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget' => '</aside>',
    'before_title' => '<h3 class="header-widget-title">',
    'after_title' => '</h3>',
  ));  
  $footer_num_cols = get_theme_mod('footer_num_cols', $tubeaceplay_defaults['footer_num_cols']);
  for($i=1;$i<=$footer_num_cols;$i++){
    register_sidebar( array(
      'name' => __('Footer Widget Area', 'tubeaceplay').' '.$i,
      'id' => 'footer-'.$i,
      'description' => __('Appears in Footer Area', 'tubeaceplay').' '.$i,
      'before_widget' => '<aside id="%1$s" class="widget %2$s">',
      'after_widget' => '</aside>',
      'before_title' => '<h3 class="footer-widget-title">',
      'after_title' => '</h3>',
    ));
  }
  register_sidebar( array(
    'name' => __('Below Header', 'tubeaceplay'),
    'id' => 'below-header-1',
    'description' => __('Appears Below Header', 'tubeaceplay'),
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget' => '</aside>',
    'before_title' => '<h3 class="below-header-widget-title">',
    'after_title' => '</h3>',
  ));  
  register_sidebar( array(
    'name' => __('Above Content', 'tubeaceplay'),
    'id' => 'above-content-1',
    'description' => __('Appears Above Content', 'tubeaceplay'),
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget' => '</aside>',
    'before_title' => '<h3 class="above-content-widget-title">',
    'after_title' => '</h3>',
  ));
  register_sidebar( array(
    'name' => __('Below Content', 'tubeaceplay'),
    'id' => 'below-content-1',
    'description' => __('Appears Below Content', 'tubeaceplay'),
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget' => '</aside>',
    'before_title' => '<h3 class="below-content-widget-title">',
    'after_title' => '</h3>',
  ));  
  register_sidebar( array(
    'name' => __('Above Comments', 'tubeaceplay'),
    'id' => 'above-comments-1',
    'description' => __('Appears Above Comments', 'tubeaceplay'),
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget' => '</aside>',
    'before_title' => '<h3 class="above-comments-widget-title">',
    'after_title' => '</h3>',
  ));
  register_sidebar( array(
    'name' => __('Above Related', 'tubeaceplay'),
    'id' => 'above-related-1',
    'description' => __('Appears Above Related', 'tubeaceplay'),
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget' => '</aside>',
    'before_title' => '<h3 class="above-related-widget-title">',
    'after_title' => '</h3>',
  ));
  register_sidebar( array(
    'name' => __('Above Footer', 'tubeaceplay'),
    'id' => 'above-footer-1',
    'description' => __('Appears Above Footer', 'tubeaceplay'),
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget' => '</aside>',
    'before_title' => '<h3 class="above-footer-widget-title">',
    'after_title' => '</h3>',
  ));      
}
add_action('widgets_init', 'tubeaceplay_widgets_init');

/* Enqueue CSS and JS */
function tubeaceplay_enqueue()  { 

  global $tubeaceplay_defaults;

  // css
  wp_enqueue_style('bootstrap', get_template_directory_uri().'/css/bootstrap.min.css');
  wp_enqueue_style('tubeaceplay-style', get_stylesheet_uri());// Loads our main stylesheet.

  // css portions
  $custom_css = get_theme_mod('header_css', $tubeaceplay_defaults['header_css']);
  $custom_css.= get_theme_mod('navbar_css', $tubeaceplay_defaults['navbar_css']);
  $custom_css.= get_theme_mod('header_widget_menu_css', $tubeaceplay_defaults['header_widget_menu_css']);
  $custom_css.= get_theme_mod('content_css', $tubeaceplay_defaults['content_css']);
  $custom_css.= get_theme_mod('left_sidebar_css', $tubeaceplay_defaults['left_sidebar_css']);
  $custom_css.= get_theme_mod('left_sidebar_widget_menu_css', $tubeaceplay_defaults['left_sidebar_widget_menu_css']);
  $custom_css.= get_theme_mod('right_sidebar_css', $tubeaceplay_defaults['right_sidebar_css']);
  $custom_css.= get_theme_mod('right_sidebar_widget_menu_css', $tubeaceplay_defaults['right_sidebar_widget_menu_css']);
  $custom_css.= get_theme_mod('preview_css', $tubeaceplay_defaults['preview_css']);
  $custom_css.= get_theme_mod('sticky_preview_css', $tubeaceplay_defaults['sticky_preview_css']);
  $custom_css.= get_theme_mod('pagination_css', $tubeaceplay_defaults['pagination_css']);
  $custom_css.= get_theme_mod('footer_css', $tubeaceplay_defaults['footer_css']);
  $custom_css.= get_theme_mod('footer_widget_menu_css', $tubeaceplay_defaults['footer_widget_menu_css']);
  $custom_css.= get_theme_mod('calendar_css', $tubeaceplay_defaults['calendar_css']);
  $custom_css.= get_theme_mod('tag_cloud_css', $tubeaceplay_defaults['tag_cloud_css']);

  // archive page
  if ( is_archive() ){
    $custom_css.= get_theme_mod('archive_page_css', $tubeaceplay_defaults['archive_page_css']);
  }

  // attachment page
  if ( is_attachment() ){
    $custom_css.= get_theme_mod('attachment_page_css', $tubeaceplay_defaults['attachment_page_css']);
    $custom_css.= get_theme_mod('comments_css', $tubeaceplay_defaults['comments_css']);
  }

  // author page
  if ( is_author() ){
    $custom_css.= get_theme_mod('author_page_css', $tubeaceplay_defaults['author_page_css']);
  }

  // page page
  if( is_page() ){
    $custom_css.= get_theme_mod('page_page_css', $tubeaceplay_defaults['page_page_css']);
    $custom_css.= get_theme_mod('comments_css', $tubeaceplay_defaults['comments_css']);
  }

  // search page
  if ( is_search() ){
    $custom_css.= get_theme_mod('search_page_css', $tubeaceplay_defaults['search_page_css']);
  }

  // single page 
  if( is_single() || get_theme_mod('preview_excerpt_content')=='content' ){
    $custom_css.= get_theme_mod('post_page_css', $tubeaceplay_defaults['post_page_css']);
    $custom_css.= get_theme_mod('comments_css', $tubeaceplay_defaults['comments_css']);
  }

  // woocommerce page
  if ( class_exists( 'WooCommerce' ) ) {
    if ( is_woocommerce() ){
      $custom_css.= get_theme_mod('page_page_css', $tubeaceplay_defaults['page_page_css']);
    }
  }

  // 404 page
  if ( is_404() ){
    $custom_css.= get_theme_mod('page_404_css', $tubeaceplay_defaults['page_404_css']);
  }

  // if preview is fixed height
  if(get_theme_mod('preview_layout_style')=='fixed_height') {
    $custom_css.= '.post-preview{ height:'. get_theme_mod('preview_fixed_height', $tubeaceplay_defaults['preview_fixed_height']).'}';
  }

  // widget menus align
  $custom_css.= '.header-widget-title{text-align:'. get_theme_mod('header_widget_menu_title_txt_align', $tubeaceplay_defaults['header_widget_menu_title_txt_align']) .'}';
  $custom_css.= '.header-widget-area ul li{text-align:'. get_theme_mod('header_widget_menu_txt_align', $tubeaceplay_defaults['header_widget_menu_txt_align']) .'}';
  $custom_css.= '.sidebar-left-widget-title{text-align:'. get_theme_mod('left_sidebar_widget_menu_title_txt_align', $tubeaceplay_defaults['left_sidebar_widget_menu_title_txt_align']) .'}';
  $custom_css.= '.sidebar-left-widget-area ul li{text-align:'. get_theme_mod('left_sidebar_widget_menu_txt_align', $tubeaceplay_defaults['left_sidebar_widget_menu_txt_align']) .'}';
  $custom_css.= '.sidebar-right-widget-title{text-align:'. get_theme_mod('right_sidebar_widget_menu_title_txt_align', $tubeaceplay_defaults['right_sidebar_widget_menu_title_txt_align']) .'}';
  $custom_css.= '.sidebar-right-widget-area ul li{text-align:'. get_theme_mod('right_sidebar_widget_menu_txt_align', $tubeaceplay_defaults['right_sidebar_widget_menu_txt_align']) .'}';    
  $custom_css.= '.footer-widget-title{text-align:'. get_theme_mod('footer_widget_menu_title_txt_align', $tubeaceplay_defaults['footer_widget_menu_title_txt_align']) .'}';
  $custom_css.= '.footer-widget-area ul li{text-align:'. get_theme_mod('footer_widget_menu_txt_align', $tubeaceplay_defaults['footer_widget_menu_txt_align']) .'}';

  // from Customizer > Header Image
  // additional CSS to make bg image responsive
  if( strlen( get_header_image() ) > 0 ){
    $custom_css.= 'nav#header {';
    $custom_css.= 'background-image: url('. get_header_image() .');'; 
    $custom_css.= 'background-repeat: '. get_theme_mod('header_background_image_repeat', $tubeaceplay_defaults['header_background_image_repeat']) .';';
    $custom_css.= 'background-position: '. get_theme_mod('header_background_image_position', $tubeaceplay_defaults['header_background_image_position']) .';';
    $custom_css.= 'background-attachment: '. get_theme_mod('header_background_image_attachment', $tubeaceplay_defaults['header_background_image_attachment']) .';';
    $custom_css.= '}';
  }

  // from Customizer > tubeaceplay Theme Options > Left Sidebar > Background Image
  if( strlen( $background_image_url = get_theme_mod('left_sidebar_background_image', $tubeaceplay_defaults['left_sidebar_background_image']) ) > 0 ){ 
    $custom_css.= '#sidebar-left {';
    $custom_css.= 'background-image: url('. $background_image_url .');'; 
    $custom_css.= 'background-repeat: '. get_theme_mod('left_sidebar_background_image_repeat', $tubeaceplay_defaults['left_sidebar_background_image_repeat']) .';';
    $custom_css.= 'background-position: '. get_theme_mod('left_sidebar_background_image_position', $tubeaceplay_defaults['left_sidebar_background_image_position']) .';';
    $custom_css.= 'background-attachment: '. get_theme_mod('left_sidebar_background_image_attachment', $tubeaceplay_defaults['left_sidebar_background_image_attachment']) .';';
    $custom_css.= '}';
  }

  // from Customizer > tubeaceplay Theme Options > Right Sidebar > Background Image
  if( strlen( $background_image_url = get_theme_mod('right_sidebar_background_image', $tubeaceplay_defaults['right_sidebar_background_image']) ) > 0 ){ 
    $custom_css.= '#sidebar-right {';
    $custom_css.= 'background-image: url('. $background_image_url .');'; 
    $custom_css.= 'background-repeat: '. get_theme_mod('right_sidebar_background_image_repeat', $tubeaceplay_defaults['right_sidebar_background_image_repeat']) .';';
    $custom_css.= 'background-position: '. get_theme_mod('right_sidebar_background_image_position', $tubeaceplay_defaults['right_sidebar_background_image_position']) .';';
    $custom_css.= 'background-attachment: '. get_theme_mod('right_sidebar_background_image_attachment', $tubeaceplay_defaults['right_sidebar_background_image_attachment']) .';';
    $custom_css.= '}';
  }

  // from Customizer > tubeaceplay Theme Options > Footer > Background Image
  if( strlen( $background_image_url = get_theme_mod('footer_background_image', $tubeaceplay_defaults['footer_background_image']) ) > 0 ){ 
    $custom_css.= '#footer {';
    $custom_css.= 'background-image: url('. $background_image_url .');'; 
    $custom_css.= 'background-repeat: '. get_theme_mod('footer_background_image_repeat', $tubeaceplay_defaults['footer_background_image_repeat']) .';';
    $custom_css.= 'background-position: '. get_theme_mod('footer_background_image_position', $tubeaceplay_defaults['footer_background_image_position']) .';';
    $custom_css.= 'background-attachment: '. get_theme_mod('footer_background_image_attachment', $tubeaceplay_defaults['footer_background_image_attachment']) .';';
    $custom_css.= '}';
  }

  // from Customizer > tubeaceplay Theme Options > Post Preview  > Background Image
  if( strlen( $background_image_url = get_theme_mod('preview_background_image', $tubeaceplay_defaults['preview_background_image']) ) > 0 ){ 
    $custom_css.= '.post-preview-styling {';
    $custom_css.= 'background-image: url('. $background_image_url .');'; 
    $custom_css.= 'background-repeat: '. get_theme_mod('preview_background_image_repeat', $tubeaceplay_defaults['preview_background_image_repeat']) .';';
    $custom_css.= 'background-position: '. get_theme_mod('preview_background_image_position', $tubeaceplay_defaults['preview_background_image_position']) .';';
    $custom_css.= 'background-attachment: '. get_theme_mod('preview_background_image_attachment', $tubeaceplay_defaults['preview_background_image_attachment']) .';';
    $custom_css.= '}';
  }

  // from Customizer > tubeaceplay Theme Options > Sticky Post Preview  > Background Image
  if( strlen( $background_image_url = get_theme_mod('sticky_preview_background_image', $tubeaceplay_defaults['sticky_preview_background_image']) ) > 0 ){ 
    $custom_css.= '.sticky-post-preview-styling {';
    $custom_css.= 'background-image: url('. $background_image_url .');'; 
    $custom_css.= 'background-repeat: '. get_theme_mod('sticky_preview_background_image_repeat', $tubeaceplay_defaults['sticky_preview_background_image_repeat']) .';';
    $custom_css.= 'background-position: '. get_theme_mod('sticky_preview_background_image_position', $tubeaceplay_defaults['sticky_preview_background_image_position']) .';';
    $custom_css.= 'background-attachment: '. get_theme_mod('sticky_preview_background_image_attachment', $tubeaceplay_defaults['sticky_preview_background_image_attachment']) .';';
    $custom_css.= '}';
  }

  // from Customizer > tubeaceplay Theme Options > Content > Background Image
  if( strlen( $background_image_url = get_theme_mod('content_background_image', $tubeaceplay_defaults['content_background_image']) ) > 0 ){ 
    $custom_css.= '#content {';
    $custom_css.= 'background-image: url('. $background_image_url .');'; 
    $custom_css.= 'background-repeat: '. get_theme_mod('content_background_image_repeat', $tubeaceplay_defaults['content_background_image_repeat']) .';';
    $custom_css.= 'background-position: '. get_theme_mod('content_background_image_position', $tubeaceplay_defaults['content_background_image_position']) .';';
    $custom_css.= 'background-attachment: '. get_theme_mod('content_background_image_attachment', $tubeaceplay_defaults['content_background_image_attachment']) .';';
    $custom_css.= '}';
  }

  $custom_css = tubeaceplay_minify_css($custom_css);

  wp_add_inline_style( 'tubeaceplay-style', $custom_css );

  // get array of fonts for Google Fonts
  $fonts = [
    get_theme_mod('header_font_family'),
    get_theme_mod('header_site_title_font_family', $tubeaceplay_defaults['header_site_title_font_family']),
    get_theme_mod('header_tagline_font_family', $tubeaceplay_defaults['header_tagline_font_family']),
    get_theme_mod('navbar_font_family'),
    get_theme_mod('header_widget_menu_title_font_family'),
    get_theme_mod('header_widget_menu_font_family'),
    get_theme_mod('left_sidebar_font_family'),
    get_theme_mod('left_sidebar_widget_menu_title_font_family'),
    get_theme_mod('left_sidebar_widget_menu_font_family'),
    get_theme_mod('right_sidebar_font_family'),
    get_theme_mod('right_sidebar_widget_menu_title_font_family'),
    get_theme_mod('right_sidebar_widget_menu_font_family'),
    get_theme_mod('preview_title_font_family'),
    get_theme_mod('preview_font_family'),
    get_theme_mod('preview_duration_font_family'),
    get_theme_mod('preview_tags_font_family'),
    get_theme_mod('preview_category_font_family'),
    get_theme_mod('preview_performers_font_family'),
    get_theme_mod('preview_rating_font_family'),
    get_theme_mod('preview_view_count_font_family'),
    get_theme_mod('sticky_preview_label_font_family'),
    get_theme_mod('sticky_preview_title_font_family'),
    get_theme_mod('sticky_preview_font_family'),
    get_theme_mod('sticky_preview_duration_font_family'),
    get_theme_mod('sticky_preview_tags_font_family'),
    get_theme_mod('sticky_preview_category_font_family'),
    get_theme_mod('sticky_preview_performers_font_family'),
    get_theme_mod('sticky_preview_rating_font_family'),
    get_theme_mod('sticky_preview_view_count_font_family'),
    get_theme_mod('comments_area_font_family'),
    get_theme_mod('comment_item_font_family'),
    get_theme_mod('comment_reply_font_family'),
    get_theme_mod('comment_form_input_font_family'),
    get_theme_mod('comment_submit_font_family'),
    get_theme_mod('pagination_font_family'),
    get_theme_mod('footer_font_family'),
    get_theme_mod('footer_widget_menu_title_font_family'),   
    get_theme_mod('footer_widget_menu_font_family'),
    get_theme_mod('post_page_font_family'),
    get_theme_mod('post_page_title_font_family'),
    get_theme_mod('post_page_blockquote_font_family'),
    get_theme_mod('post_page_tags_font_family'),
    get_theme_mod('post_page_category_font_family'),
    get_theme_mod('post_page_performers_font_family'),
    get_theme_mod('page_page_font_family'),
    get_theme_mod('page_page_title_font_family'),
    get_theme_mod('archive_page_title_font_family'),    
    get_theme_mod('attachment_page_font_family'),
    get_theme_mod('attachment_page_title_font_family'),
    get_theme_mod('author_page_font_family'),
    get_theme_mod('author_page_title_font_family'),
    get_theme_mod('category_page_title_font_family'),
    get_theme_mod('tag_page_title_font_family'),
    get_theme_mod('taxonomy_page_title_font_family'),
    get_theme_mod('search_page_font_family'),
    get_theme_mod('search_page_title_font_family'),
    get_theme_mod('page_404_font_family'),
    get_theme_mod('page_404_title_font_family'),    
    get_theme_mod('calendar_font_family'),
    get_theme_mod('tag_cloud_font_family'),
  ];

  // remove false value(s)
  $fonts = array_filter( $fonts, 'strlen' );
  // remove duplicates
  $fonts = array_unique($fonts);
  // remove webfonts (not retrievable in API)
  $fonts = array_diff( $fonts, tubeaceplay_websafe_fonts() );

  // make sure at least 1 in array
  if( sizeof($fonts)>0 ){

    // implode fonts array with pipe for API call
    $fonts = implode('|', $fonts);

    // replace space with plus sign for API call
    $fonts = str_replace(" ", "+", $fonts);

    wp_enqueue_style( 'tubeaceplay-fonts', 'http://fonts.googleapis.com/css?family='.$fonts, false );
  }

  // js
  wp_enqueue_script('jquery');
  wp_enqueue_script('bootstrap-js', get_template_directory_uri().'/js/bootstrap.min.js', array('jquery'), true);
  if( get_theme_mod('preview_layout_style', $tubeaceplay_defaults['preview_layout_style'])=='masonry' ){
    wp_enqueue_script('masonry');
    wp_enqueue_script('imagesloaded');
    wp_enqueue_script('masonry-js', get_template_directory_uri().'/js/masonry.js', array('jquery','imagesloaded'), true, true);

  }

  // Register Comment Reply Script for Threaded Comments.
  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ){
    wp_enqueue_script( 'comment-reply' );
  }
}
add_action('wp_enqueue_scripts', 'tubeaceplay_enqueue');

require get_template_directory() . '/inc/customizer/customizer.php'; // customizer
require get_template_directory() . '/inc/customizer/customizer-custom-controls.php'; // custom controls
require get_template_directory() . '/inc/header/wp_bootstrap_navwalker.php'; // bootstrap navbar
require get_template_directory() . '/inc/theme-settings.php'; // theme settings page
require get_template_directory() . '/inc/styling-functions.php'; // functions for styling

function tubeaceplay_add_license_options () {
  add_option('tubeaceplay_license_key', '39f451a326ebc8e72482161d882c03a8');
  add_option('tubeaceplay_license_key_status', 'valid');

  // activate license so users can update
  wp_remote_post( 'https://tubeace.com/?edd_action=activate_license&item_id=6048&license=39f451a326ebc8e72482161d882c03a8&url='.home_url() );
}
add_action('after_switch_theme', 'tubeaceplay_add_license_options');

function tubeaceplay_theme_updater() {
  require( get_template_directory() . '/updater/theme-updater.php' );
}
add_action( 'after_setup_theme', 'tubeaceplay_theme_updater' );