# Remove the existing git repository
rm -rf .git

# Initialize a new git repository
git init

# Add all files to the new repository
git add .

# Create initial commit
git commit -m "Initial commit"

# Replace USERNAME and REPO-NAME with your GitHub username and repository name
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Push to your new repository
git push -u origin main
