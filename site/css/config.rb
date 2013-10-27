# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Look for any *.scss files in same directory as this file
# Place compiled *.css files in the parent directory
sass_path    = dir
css_path     = dir
output_style = :expanded
environment  = :production