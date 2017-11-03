## What are Hack Hours?
Hack hours are a series of algorithm problems to refine your problem solving skills. You will be presented a new algorithm problem every day starting after the algorithm unit.

## What do I need to do to get initial setup done for Hack Hours?
These steps should only be done once!
- [ ] Fork this hack hour repo.  This will create a repo on Github under your account.  
- [ ] Go to the forked version of this repo on your Github account and click the `Clone or Download` button.  Then grab the URL from that dropdown.
- [ ] Open a terminal session and navigate to the directory where you'll be working on your hack hours.
- [ ] Type `git clone <paste github URL>`.  This will create a hack-hour-# directory, where # is your cohort number.  `cd` to that directory.  
- [ ] On github, navigate back to this CodesmithLLC repo and click the `Clone or Download` button.  Then grab the URL from that dropdown.
- [ ] Back on your terminal, type `git remote add upstream <paste CodesmithLLC github URL>`.  
- [ ] Verify that you have aliases for origin and upstream by typing `git remote -v`
- [ ] These aliases should look something like this:
- origin	https://github.com/yourGithubName/hack-hour-99.git (fetch)
- origin	https://github.com/yourGithubName/hack-hour-99.git (push)
- upstream	https://github.com/CodesmithLLC/hack-hour-99.git (fetch)
- upstream	https://github.com/CodesmithLLC/hack-hour-99.git (push)

## How do I get new Hack Hours every day?
- [ ] Open a terminal session and navigate to your hack hour directory.
- [ ] Type `git pull upstream master`.  This will pull down the latest released hack hour.

## What do I do after I complete a Hack Hour problem?
- [ ] Commit your changes to your local hack hour repo
- [ ] Once your changes are committed, type `git push origin master` to push your latest commit(s) up to your github repo.
- [ ] Go to your hack hour repository on Github and click `New Pull Request`
- [ ] Change the Base Fork branch to be your username.  You should see a green checkmark and 'Able to Merge'
- [ ] Click on `Create Pull Request`.
- [ ] Within a few minutes, you will receive an autogenerated email indicating whether your solution passed our series of tests.
![](https://www.dropbox.com/s/nc5fjycummdfyxn/pull-request-hack-hours.png?dl=1)
<br>
## How do I test Ruby files?
Some later hack hours include Ruby files (.rb) as well as a JS file. For these hack hours you should attept to complete both the JS and the Ruby versions. The tests for Ruby are included in the .rb file. In order to test your work, you'll need to do the following:
- [ ] [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [ ] run `gem install test-unit` from your hack-hour directory
- [ ] run `ruby challenges/challenge-name.rb`
