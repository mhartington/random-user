from subprocess import Popen, PIPE, check_output, call, CalledProcessError
def getRootPath():
    try:
        return check_output(["git", "rev-parse", "--show-toplevel"]).decode().strip('\n')
    except CalledProcessError:
        return 'helllo'
    # return p.decode()
    # output = p.communicate()[0]
    # if p.returncode != 0:
    #     return '.'
    # else:
    #     return output.decode()

print(getRootPath())
